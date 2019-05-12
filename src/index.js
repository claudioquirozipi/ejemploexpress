const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings


//Middlewares
app.use(express.json());
app.use(morgan('dev'));


//Routes
// app.all('/user/*', (req,res, next) => {
//     console.log("por aquí pasó...");
//     next();
// });


app.get('/user',(req, res) => {
    res.json({
        username: 'Claudio',
        lastName: 'Quiroz'
    });
});
app.post('/user/:id/:hola', (req,res) => {
    console.log(req.body); 
    console.log(req.params.id);
    res.send('peticion post');
});
app.put('/about', (req, res) => {
    res.send('peticion put');
});

app.delete('/test', (req, res) => {
    res.send('<h1>peticion delete</h1>');
});

app.use(express.static('src/public'));

app.listen(3000, () => {
    console.log("server on port 3000, jajaja")
});