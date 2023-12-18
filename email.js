// email.js
const nodemailer = require('nodemailer');

class Email {
  constructor({ user, pass, from }) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
    this.from = from;
  }

  async sendEmail(to, subject, text) {
    try {
      const mailOptions = {
        from: this.from,
        to,
        subject,
        text,
      };

      const info = await this.transporter.sendMail(mailOptions);
      return { message: 'Email sent successfully', info };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}

module.exports = Email;
