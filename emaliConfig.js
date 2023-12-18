// emailConfig.js
const nodemailer = require('nodemailer');

class EmailConfig {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
      },
    });
  }

  async sendEmail({ to, subject, text }) {
    try {
      const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text,
      };

      const info = await this.transporter.sendMail(mailOptions);
      return { message: 'Email sent successfully', info };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  }
}

module.exports = EmailConfig;
