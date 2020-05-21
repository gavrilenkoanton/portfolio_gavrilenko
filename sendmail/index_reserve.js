const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios');
const app = express()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'gavrilenko7732@gmail.com',
        pass: 'Bringmethehorizon'
    }
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/index', async (req, res) => {
    async function send(reqs){

        let info = await transporter.sendMail({
            from: '"Форма обратной связи" <form@myportfolio>',
            to: "gavrilenko7732@gmail.com",
            subject: "Сообщение из формы обратной связи",
            html: reqs.body.html
        })
        console.log("Message sent: %s", info.messageId);
    }
    let result = await send(req)
        .catch(() => {
            res.send(false)
        })
        .then(result =>{
            // console.log(req.body)
            res.send(true)
        })
});

app.get('/', async (req, res) => {
    console.log('get!!!');
});

module.exports = {
    path: '/sendmail',
    handler: app
};