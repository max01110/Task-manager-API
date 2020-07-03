const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'michet.maxime@gmail.com',
        subject: 'Welcome to Task Manager!',
        text: `Welcome to the app, ${name}. Let me know if you enjoy this app!`
    })
}

const sendCancellationEmail = (email, name) => {
    console.log('test')
    sgMail.send({
        to: email,
        from: 'michet.maxime@gmail.com',
        subject: 'Task Manager Account Cancellation',
        text: `We are sad to see you go, ${name}! Let us know if there was anything we could have done to keep you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}