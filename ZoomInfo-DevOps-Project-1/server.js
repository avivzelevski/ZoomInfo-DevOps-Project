const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const axios = require('axios');

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
});

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
    res.send('Successful response from service 1');
});

app.get('/service2', (req1, res1) => {
    axios
        .get('http://10.0.133.201:3002/api')
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res);
            res1.send(res.data);
        })
        .catch(error => {
            console.error(error);
            res1.send("Can't access service 2! :( ");
        });
});

app.listen(3001, () => console.log('Example app is listening on port 3001.'));


