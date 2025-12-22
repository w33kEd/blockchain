const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`listening at localhost:${PORT}`));