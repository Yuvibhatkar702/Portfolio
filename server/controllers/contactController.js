const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to YOU
    const notifyMail = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: '📩 New Portfolio Contact Message',
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Email to SENDER (confirmation)
    const confirmMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ Thanks for contacting Yuvraj!',
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for reaching out! I’ve received your message and will get back to you soon.</p>
        <br/>
        <p>Regards,<br/>Yuvraj Bhatkar</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(notifyMail);
    await transporter.sendMail(confirmMail);

    res.status(200).json({ success: true, message: 'Message and confirmation email sent!' });
  } catch (error) {
    console.error('❌ Email error:', error);
    res.status(500).json({ success: false, message: 'Error processing your request.' });
  }
};

module.exports = { submitContact };
