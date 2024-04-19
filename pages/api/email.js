import { createRouter } from "next-connect";
import { transporter } from "@/utils/mailer.js";
import db from "@/utils/db";

const router = createRouter();

router.post(async (req, res) => {
  const { name, email, description } = req.body;
  try {
    await transporter.sendMail({
      from: `SIBAIKOLE WEBSITE: ${email}`,
      to: "glezrdg@gmail.com",
      subject: `${name}`,
      html: `<h2>Sender: ${email}</h2>  <h3>Description: ${description}</h3> `, // html body
    });
    res.status(200).send("enviado");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
