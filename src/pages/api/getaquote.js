// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sgMail from "@sendgrid/mail";
export default function handler(req, res) {
  const { values } = req.body;
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.MAIL_TO, // Change to your recipient
    from: process.env.MAIL_FROM, // Change to your verified sender
    subject: `Pixelflames get a quote form `,
    html: `<p><strong>Name: </strong>${values.name}</p>
    <p><strong>Email: </strong>${values.email}</p>
    <p><strong>Message: </strong>${values.message}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Message sent!" });
    })
    .catch((error) => {
      res.status(200).json({ message: error });
    });
}
