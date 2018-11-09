const express = require('express')
const app = express();
app.use(express.json());
var _ = require('lodash');
const rollDice = require('./rollDice')

let users = [{id: "1", name: "Name 1"}, {id: "2", name: "Name 2"}]
let body;
app.get('/roll/:max?', (req, res) => {
    res.json(rollDice.roll(req.params.max));
})

app.get('/users/all', (req, res) => {
    res.send(users);
});

app.get('/newUser', (req, res) => {
    res.send(req.body);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    body = newUser;
    newUser.id = _.random(0, 100);
    users.push(newUser);
    res.json(newUser);
});

app.listen(3000, () => console.log('Ready on port 3000!'));