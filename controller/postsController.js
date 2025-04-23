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
    //res.send('Inserimento nuovo post')

    //Inizializzo id dell'elemento da inserire
    const nuovoId= posts[posts.lenght-1].id +1;

    //Recupero body
    console.log(req.body);

    //creo nuovo oggetto da inserire
    const nuovoPost = {
        id: nuovoId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    //inserisco il nuovo oggetto nell'array
    posts.push(nuovoPost);

    //restituisco la lista aggiornata
    res.json(posts);

}

//update
function update(req,res){
   // res.send(`Modifica totale del post ${req.params.id}`)

    //recuperare il valore del parametro
    const id = parseInt(req.params.id);

    //recupero post
    const post = posts.find(post => post.id ===id);

    //check esistenza post
    if(!post){

        //importare lo stato
        res.status(404);

        //messaggio di ritorno per l'utente
        return res.json({
            message : `Post numero ${req.params.id} non trovato`
        });
    }
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


