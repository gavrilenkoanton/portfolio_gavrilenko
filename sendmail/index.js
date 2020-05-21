const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const port = 3010;

// to start node index.js

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.listen(port, () => {
    console.log('We are live on port 3010');
});

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
        user: 'gavrilenko7732@gmail.com',
        pass: ''
    }
});


app.get('/', (req, res) => {
    res.send('Welcome to my api');
})

app.post('/mail', (req, res) => {
    var data = req.body;

    var mailOptions = {
        from: data.email,
        to: 'gavrilenko7732@gmail.com',
        subject: data.subject,
        html: `<p> Это сообщение отправлено из твоего портфолио,
 пользователь указал:
  <br> Имя: ${data.name}
   <br> Тему: ${data.subject}
    <br> Контактный Email: ${data.email}
     <br> Текст сообщения: ${data.message}</p>`
    };

    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                res.send(error)
            } else {
                res.send('Success')
            }
            smtpTransport.close();
        });

})