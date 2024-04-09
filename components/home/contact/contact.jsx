import { ErrorMessage, Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
// import { createEmail } from "../../api/email.controller";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Section" // Describes the section of the page
      className="xl:h-[100vh] lg:h-[100vh] md:h-[160vh] max-sm:h-[150vh]  cursor-pointer relative bg-[#7f2627]  text-zinc-100 flex flex-col justify-between w-full"
    >
      <Toaster aria-label="Notification Messages" />
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-[#7f2627]  lg:hidden md:hidden max-sm:hidden xl:flex "></div>
      <div className="xl:h-4/5 md:h-4/5 flex xl:flex-row lg:flex-row justify-center items-center xl:p-0 lg:px-10 md:flex-col md:w-full max-sm:flex-col ">
        <div className="w-1/2 max-sm:w-full  md:w-5/6 h-[60vh] xl:items-start lg:items-start md:items-center  flex flex-col   max-sm:items-center max-sm:justify-center">
          <div className="flex flex-col max-sm:text-center h-[15vh] md:h-[20vh] ;lg:h-[25vh] max-sm:h-[15vh] ">
            <h1 className="text-5xl max-md:text-4xl font-semibold max-lg:text-center">
              Escribenos, respuesta inmediata!
            </h1>
            <span className=" xl:self-start lg:self-start md:self-center font-semibold mt-2">
              Usualmente es como funciona
            </span>
          </div>
          <p className="w-4/5 text-2xl ">
            Estamos ansiosos por descubrir cómo nuestras habilidades pueden
            contribuir a tus futuros proyectos. Escríbenos y crezcamos juntos en
            este camino de progreso e innovación.
          </p>
        </div>
        <div className="flex flex-col md:w-5/6 w-1/2 h-[60vh] max-sm:w-full max-sm:h-1/2 max-sm:px-5">
          <div className="h-[15vh]  mx-0 ">
            <h1 className="mb-2 text-5xl max-sm:text-4xl  font-semibold">
              Cuentanos sobre tu proyecto!
            </h1>
            <span className="  font-semibold ">O tu propuesta... </span>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              description: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Este campo es requerido"),
              email: Yup.string().email("Email Inválido").required("Este campo es requerido"),
              description: Yup.string().required("Este campo es requerido"),
            })}
            onSubmit={async (values, actions) => {
              try {
                await createEmail(values);
                toast.success("Email enviado exitosamente!");
                actions.resetForm();
              } catch (error) {
                console.error(error);
                toast.error("Something went wrong, please try again later.");
              }
            }}
          >
            <Form className="flex flex-col md:w-full" aria-label="Contact Form">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg">
                  Tu nombre o compañía:
                </label>
                <Field
                  type="text"
                  className="inputs"
                  name="name"
                  id="name"
                  aria-label="Your Name or Company"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-yellow-400 font-semibold"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="text-lg">
                  Tu correo electrónico:
                </label>
                <Field
                  type="text"
                  className="inputs"
                  name="email"
                  id="email"
                  aria-label="Your Email"
                />
                <ErrorMessage
                  component="p"
                  className="text-yellow-400 font-semibold"
                  name="email"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="description" className="text-lg">
                  ¿Cómo podemos ayudarte?
                </label>
                <Field
                  name="description"
                  as="textarea"
                  rows="3"
                  className="inputs"
                  id="description"
                  aria-label="How Can We Help You?"
                />
                <ErrorMessage
                  component="p"
                  className="text-yellow-400 font-semibold"
                  name="description"
                />
              </div>
              <div className="w-full flex justify-end">
                <button
                  aria-label="Send your message"
                  type="submit"
                  className="font-bold px-10 py-3 mt-5 hover:text-zinc-800 hover:bg-[#7f2627] flex items-center border border-zinc-800 bg-zinc-800 text-white transition"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <footer className="relative w-full  h-[15vh] flex items-center justify-center bg-zinc-800">
        <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-zinc-800 max-lg:hidden md:hidden xl:flex"></div>
        <h1 className="text-white text-xl text-center">
          Copyright Just Digital AI © 2024 All Rights Reserved.
        </h1>
      </footer>
    </section>
  );
};

export default Contact;
