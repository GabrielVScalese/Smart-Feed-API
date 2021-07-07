const { createTransport } = require("nodemailer");

function validate(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return res.test(String(email).toLowerCase());
}

class GenerateEmailProvider {
  static execute(email, subject, html) {
    if (validate(email)) {
      if (email.indexOf("hotmail")) service = "hotmail";
      else service = "gmail";

      // const transport = createTransport({service: })
    } else {
      throw Exception();
    }
  }
}

module.exports = GenerateEmailProvider;
