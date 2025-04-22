//Recupero tutti i post
const posts = require('../data/posts.js')

//index
function index(req,res){
    //uso delle query string
    const titoloPost = req.query.title; 

    //Creo una variabile che contiene il post filtrato
    let postFiltrato = posts;

    //check
    if(titoloPost){
        postFiltrato = posts.filter((post)=>{
            return post.title.includes(titoloPost);
        });
    }
    
    //Risposta
    res.json(postFiltrato);
} 

//show
function show(req,res){
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    
    if (post) {
        res.json(post);
    }
    else{
        //setto lo stato
        res.status(404);
        return res.json({
            message: `Post numero ${req.params.id} non trovato`
        });
    }
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

module.exports={index,show,store,update,modify,destroy}


