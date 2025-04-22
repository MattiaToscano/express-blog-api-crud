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

//store
function store(req,res){
    res.send('Inserimento nuovo post')
}

//update
function update(req,res){
    res.send(`Modifica totale del post ${req.params.id}`)
}

//modify
function modify(req,res){
    res.send(`Modifica parziale del post ${req.params.id}`)
}

//destroy
function destroy(req,res){
    res.send(`Èliminazione del post ${req.params.id}`)
}




