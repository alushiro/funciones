const nodemailer = require('nodemailer');

async function sendEmailAuth() {
  try {
    // Configuración del servicio de correo electrónico
    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'tu_correo@dominio.com',
        pass: 'tu_contraseña'
      }
    });

    // Contenido del correo electrónico
    let mailOptions = {
      from: 'Remitente <tu_correo@dominio.com>',
      to: 'destinatario1@dominio.com, destinatario2@dominio.com',
      subject: 'Asunto del correo electrónico',
      text: 'Contenido en texto plano',
      html: '<p>Contenido en HTML</p>'
    };

    // Envío del correo electrónico
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado: ', info.messageId);
  } catch (error) {
    console.error('Error al enviar el correo electrónico: ', error);
  }
}




async function sendEmailApiKey() {
  try {
    // Configuración del servicio de correo electrónico
    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        apiKey: 'TU_API_KEY'
      }
    });

    // Contenido del correo electrónico
    let mailOptions = {
      from: 'Remitente <tu_correo@dominio.com>',
      to: 'destinatario1@dominio.com, destinatario2@dominio.com',
      subject: 'Asunto del correo electrónico',
      text: 'Contenido en texto plano',
      html: '<p>Contenido en HTML</p>'
    };

    // Envío del correo electrónico
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado: ', info.messageId);
  } catch (error) {
    console.error('Error al enviar el correo electrónico: ', error);
  }
}

sendEmailApiKey();
sendEmailAuth();