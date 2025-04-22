//Importo express
const express =require('express');

//Definisco il router
const router = express.Router();

//importo il controller posts
const postsController = require('../controller/postsController')

//Riprendo l'array
const post = require('../data/posts')

//index
router.get('/', postsController.index);

//Show
router.get('/', postsController.show);

//Store
router.post('/', postsController.store);

//Update
router.put('/', postsController.update);

//Modify
router.patch('/', postsController.modify);

//Destroy
router.delete('/', postsController.destroy);

//Esporto postsRotta
module.exports =(router)


