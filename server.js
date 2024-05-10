const products = require('./products');
const {init} = require('./db/fileDb')

const express = require('express');
const app = express();
const port = 9000;

init();
app.use(express.json())
app.use('/products', products)

app.listen(port, ()=>{
    console.log(`Наш сервер старт on http://localhost:${port}`);
})

