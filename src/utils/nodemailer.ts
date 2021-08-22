import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

export default class Send {
  async send(message) {
    const params = {
      host: process.env.NODEMAILER_HOST,
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
      to: message.email,
      replyTo: message.email,
      subject: `Obrigado por participar, ${message.name}`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    }
    console.log("-------------------------------")
    console.log(params)

    const transporter = await nodemailer.createTransport({
      service: params.host,
      auth: { user: params.user, pass: params.pass },
    })

    return await transporter
      .sendMail({
        from: params.user,
        to: params.to,
        replyTo: params.replyTo,
        subject: params.subject,
        text: params.text,
      })
      .then((response) => {
        return response
      })
      .catch((err) => {
        return err
      })
  }
}
