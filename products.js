const express = require('express');
const router = express.Router();
const fileDb = require('./db/fileDb')
const generateUniqueId = require('generate-unique-id');
router.get('/', (req, res) =>{
    

    const products = fileDb.getProducts();
    res.status(200).send(products);
    
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    const result = fileDb.getID(id)
    res.status(202).send(result);
   
})
router.post('/', (req, res) =>{
    const body = req.body;//{name: Milk, price: 200}
    body.id = generateUniqueId();
    fileDb.addProduct(body);
    res.status(201).send(body);
    
})


module.exports = router;
