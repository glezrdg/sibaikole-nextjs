import { createRouter } from "next-connect";
import Email from "@/model/mail.js";
import { transporter } from "@/utils/mailer.js";
import db from "@/utils/db";

const router = createRouter();

router
  .get(async (req, res) => {
    try {
      await db.connect();
      const emails = await Email.find();
      res.status(200).json(emails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  })

  .post(async (req, res) => {
    const { name, email, description } = req.body;
    try {
      const item = await Email.create({
        name,
        email,
        description,
      });
      await transporter.sendMail({
        from: "Your email",
        email,
        to: "glezrdg@gmail.com",
        subject: name,
        text: description,
      });
      res.status(200).json(item);
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
