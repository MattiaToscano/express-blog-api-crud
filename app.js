//Importo express
const express = require('express');

//Inizializzo express
const app = express();

//Indico ad express di trattare i body come json
app.use(express.json());

//Definisco la porta
const port = 3000;

//Importo il router
const postsRotta = require ('./router/postsRotta');

//Utilizzo postsRotta 
app.use('/posts', postsRotta);

//Definisco la mainpage
app.get('/', (req,res) =>{
    res.send('Mainpage')
})

app.use(errorsHandler);
app.use(notFound);

//Faccio rimanere il server in ascolto
app.listen(port,()=>{
    console.log(`Il server è in ascolto sulla porta ${port}`)
})