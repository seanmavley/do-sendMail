const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.main = (args) => {

  const to = args.to;
  const subject = args.subject;
  const text = args.text;

  const msg = {
    to: to,
    from: "hello@khophi.co", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    // html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail.send(msg).then(
    () => {
      console.log("Message sent");
      return { status: true, body: "Message sent" };
    },
    (error) => {
      return { status: false, body: error };
    }
  );
};
