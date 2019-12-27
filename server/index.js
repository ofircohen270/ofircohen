const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const  resumeData = require(process.platform === "win32" ? "C:/tmp/resume.json" : "/resume.json");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(pino);

app.get('/api/resume', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({greeting: `Hello ${name}!`}));
    res.send(JSON.stringify(resumeData))
});

app.listen(80, () =>
    console.log('Express server is running on localhost:80')
);
