const calc = require('./calc');
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Hello World');
    res.status(200).send('Hello World');
})

app.get('/alian', (req, res)=>{
    var id = req.query.id
    res.status(200).send('Welcome back Alian ' + id);
})

app.get('/alian/:id', (req, res)=>{
    var id = req.params.id
    res.status(200).send('Hi Madusanka ' + id);
})

app.listen(9000, (req, res)=>{
    console.log('Running on port 9000');
});