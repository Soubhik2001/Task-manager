const sgMail = require('@sendgrid/mail')

const sendgridAPIKey =''

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail =(email,name)=>{
    sgMail.send({
        to:email,
        from:'',
        subject:'Welcome Email',
        text:`Welcome to the app,${name}`
    })
}

const sendCancellationEmail =(email,name)=>{
    sgMail.send({
        to:email,
        from:'',
        subject:'Cancellation email',
        text:`Goodbye,${name}`
    })
}

module.exports ={
    sendWelcomeEmail,
    sendCancellationEmail
}