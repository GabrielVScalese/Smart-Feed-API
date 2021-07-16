require("dotenv").config();

const nodemailer = require("nodemailer");

class MailProvider {
  transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(message) {
    await this.transporter.sendMail({
      to: {
        name: message["to"]["name"],
        address: message["to"]["email"],
      },
      from: {
        name: message["from"]["name"],
        address: message["from"]["email"],
      },
      subject: message["subject"],
      html: message["body"],
    });
  }
}

module.exports = MailProvider;
