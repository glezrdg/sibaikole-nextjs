import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Ready for send emails");
  })
  .catch((error) => {
    console.log(error);
  });
