//Importo express
const express =require('express');

//Definisco il router
const router = express.Router();

//importo il controller posts
const postsController = require('../controller/postsController.js')

//Riprendo l'array
const post = require('../data/posts')

//index
router.get('/', postsController.index);

//Show
router.get('/:id', postsController.show);

//Store
router.post('/', postsController.store);

//Update
router.put('/:id', postsController.update);

//Modify
router.patch('/:id', postsController.modify);

//Destroy
router.delete('/:id', postsController.destroy);

//Esporto postsRotta
module.exports = router


