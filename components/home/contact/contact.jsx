import React from "react";
import { BsGithub } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
// import { createEmail } from "../../api/email.controller";

const Contact = () => {
  return (
    <section
      id="contact"
      className="xl:h-[100vh] lg:h-[100vh] md:h-[160vh] max-sm:h-[150vh]  cursor-pointer relative bg-[#7f2627]  text-zinc-100 flex flex-col justify-between w-full"
    >
      <Toaster />
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-[#7f2627]  lg:hidden md:hidden max-sm:hidden xl:flex "></div>
      <div className="xl:h-4/5 md:h-4/5 flex xl:flex-row lg:flex-row justify-center items-center xl:p-0 lg:px-10 md:flex-col md:w-full max-sm:flex-col ">
        <div className="w-1/2 max-sm:w-full  md:w-5/6 h-[60vh] xl:items-start lg:items-start md:items-center  flex flex-col   max-sm:items-center max-sm:justify-center">
          <div className="flex flex-col max-sm:text-center h-[15vh] md:h-[20vh] ;lg:h-[25vh] max-sm:h-[15vh] ">
            <h1 className="text-5xl max-sm:text-4xl font-semibold">
              Escribenos, respuesta inmediata!
            </h1>
            <span className=" xl:self-start lg:self-start md:self-center font-semibold mt-2">
              Usualmente es como funciona
            </span>
          </div>
          <p className="w-4/5 text-2xl ">
            Would love to hear what my skills are able to do for you and your
            upcoming projects, my path its the growth path and I love watch the
            human kind grow together as brothers.
          </p>

          <div className="h-[15vh]  flex  items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Call or Message: </h3>
              <span className="font-semibold ml-2">+1 (829) 464 9960</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-5/6 md:items-center w-1/2 h-[60vh] max-sm:w-full max-sm:h-1/2 max-sm:px-5">
          <div className="h-[15vh] max-lg:h-[25vh] max-sm:text-center">
            <h1 className="mb-2 text-5xl max-sm:text-4xl  font-semibold">
              Tell me about your new project
            </h1>
            <span className="  font-semibold ">Or your proposal... </span>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              description: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              description: Yup.string().required("Required"),
            })}
            onSubmit={async (values, actions) => {
              try {
                await createEmail(values);
                toast.success("Email sent successfully");
                actions.resetForm();
              } catch (error) {
                console.error(error);
                toast.error("Something went wrong, please try again later.");
              }
            }}
          >
            <Form className="flex flex-col md:w-full">
              <div className="flex flex-col ">
                <label htmlFor="" className="text-lg">
                  Your name or company:
                </label>
                <Field type="text" className="inputs " name="name" />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="" className="text-lg">
                  Your Email Address
                </label>
                <Field type="text" className="inputs" name="email" />
                <ErrorMessage
                  component="p"
                  className="text-red-500 font-semibold"
                  name="email"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="" className="text-lg">
                  How may I assist you?
                </label>
                <Field
                  name="description"
                  as="textarea"
                  rows="3"
                  className="inputs"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-500 font-semibold"
                  name="description"
                />
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="font-bold px-8 py-3 mt-5 border text-zinc-800 border-zinc-800 flex items-center   hover:bg-zinc-800 hover:text-white transition"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <footer className="relative w-full  h-[15vh] flex items-center justify-center bg-zinc-800">
        <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-zinc-800 max-lg:hidden md:hidden xl:flex"></div>
        <h1 className="text-white text-xl text-center">
          Copyright © 2023 Germán. All Rights Reserved.
        </h1>
      </footer>
    </section>
  );
};

export default Contact;
