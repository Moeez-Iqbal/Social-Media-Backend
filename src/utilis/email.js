import nodemailer from "nodemailer";

let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b915c0b24c7df3",
      pass: "3b16a8332593e3"
    }
  });

const email = {
create: async (req, res) => {
  try {
    // Send mail with defined transport object
    const info = await transport.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
    // Respond with success message
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Respond with error message
    res.status(500).json({ error: "Failed to send email" });
  }
}

}

export default email;