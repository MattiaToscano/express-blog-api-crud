//Recupero tutti i post
const posts = require('../data/posts.js')

//index
function index(req,res){
    res.json(posts);
} 

//show
function show(req,res){
    res.json(`Mostro post ${req.params.id}`);
}

