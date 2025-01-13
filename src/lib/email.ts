import nodeMailer, { SendMailOptions } from "nodemailer";

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (
  email: string,
  subject: string,
  body: string
) => {
  if (!email || typeof email !== "string") {
    return null;
  }

  const options: SendMailOptions = {
    from: process.env.SMTP_USERNAME,
    to: email,
    subject: subject,
    html: body,
  };

  try {
    const info = await transporter.sendMail(options);
    console.log("DEV : ", { info });
  } catch (error: unknown) {
    // TODO : it will be deleted on production env.
    if (error instanceof Error) {
      console.log("DEV ERROR : ", error.message);
    }

    return null;
  }
};
