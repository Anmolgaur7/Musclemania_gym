const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const path = require('path')
var nodemailer = require('nodemailer')
const { Console } = require('console')
const app = express();

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})
app.get('/blog.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'))
})
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'))
})
app.post('/contact.html', (req, res) => {
    console.log(req.body);
    n = req.body.name
    age = req.body.age
    gender = req.body.gender
    contact=req.body.contact
    address = req.body.address
    more = req.body.more
    res.sendFile(path.join(__dirname, 'response.html'))
    if (res.status===200) {
        alert("Form successfully submitted")
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anmolgaur26@gmail.com',
            pass: 'namiislove7'
        },
        tls: {
            rejectUnauthorized:false
        }
    });
    var mailoptions = {
        from: 'anmolgaur26@gmail.com',
        to: "anmolgaur87@gmail.com",
        subject: "Query about gym",
        text: `The mail is sent by ${n}
        His age is ${age}
        Gender is ${gender}
        contact:${contact}
        address is ${address},
        asked:${more}`
    }
    transporter.sendMail(mailoptions, function (error, info) {
        if (error) {
            console.error(error);
        }
        else {
            console.log("email sent")
        }
    })
})
app.listen(80, () => {
    console.log("the applicatiion started on port 80")
})
