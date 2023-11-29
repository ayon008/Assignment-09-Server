const express = require('express');
const app = express();
const port = 5000;
const data = require('./data.json')
const cors = require('cors');

app.use(cors());

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const find = data.find(d => parseInt(d.id) === id);
    res.send(find);
})

app.listen((port), () => {
    console.log(port)
})
