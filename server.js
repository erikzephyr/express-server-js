const express = require('express')
const app = express();
const rollDice = require('./rollDice')

app.get('/roll/:max?', (req, res) => {
    res.json(rollDice.roll(req.params.max));
})

app.listen(3000, () => console.log('Ready on port 3000!'));