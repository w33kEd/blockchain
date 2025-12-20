const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

app.use(bodyParser.json());

app.get('/blocks', (req, res) => {
    res.json(bc.chain);
    console.log(`blocks requested from ${req.ip}`);
});

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`new block added: ${block.toString()}`);

    res.redirect('/blocks');
});

app.listen(HTTP_PORT, "0.0.0.0", () => console.log(`listening on port ${HTTP_PORT}`));