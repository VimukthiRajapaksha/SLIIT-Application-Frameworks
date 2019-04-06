'use strict';

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/common'));

const users = [];

app.get('/', (req, res, next) => {
   res.sendFile('index.html');
});

app.get('/users', (req, res) => {
   res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
   const id = req.params.id;
   const user = users.find(x => x.id === parseInt(id));
   res.status(200).json(user);
});

app.put('/users/:id', (req, res) => {
   const index = users.findIndex(x => x.id === parseInt(req.params.id));
   if(index >= 0){
    users[index] = {...users[index], ...req.body};
       res.status(201).json(req.params.id + ' updated successfully !');
   }
   else {
       res.status(404).json('user not found !');
   }
});

app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(user => user.id === parseInt(req.params.id));
    if(index >= 0){
        users.splice(index, 1);
        res.status(201).json(req.params.id + ' deleted successfully !');
    } else {
        res.status(404).json('user not found !');
    }
});

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = Date.now();
    user.birthDay = new Date(user.birthDay);

    users.push(user);

    res.status(201).json(user.id + ' saved successfully !');
});

app.listen(3000, err=> {
    if(err){
        console.error(err);
        return;
    }
    console.log('app is listening on port 3000...');
});