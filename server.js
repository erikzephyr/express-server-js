const express = require('express')
const app = express();

const usuarios = [{id: 1, name: 'Pepe'}, {id: 2, name: 'Juan'}];

app.get('/users', (req, res) => {
    //res.send('nodemon');
    res.json(usuarios);
})

app.get('/users/:id', (req, res) => {
    const userID = req.params.id;
    const user = usuarios.find(user => user.id == userID);
     res.json(user);
});

app.listen(3000, () => console.log('Ready on port 3000!'));