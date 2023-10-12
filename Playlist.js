function playList(){
   
    const musica = {
       nome: [],
       compositor: [],
       genero: [],      
    }
 
    function adicionar(nome, compositor, genero){
       musica.nome.push(nome);
       musica.compositor.push(compositor);
       musica.genero.push(genero);
    }
    
 
    function localizar(localizaPorNome){
       const indice = musica.nome.indexOf(localizaPorNome);
        return indice !== -1 ? indice : "Música não localizada!";
    }
    
 
    function remover(removePorNome){
       const indice = localizar(removePorNome);
       if(indice !== "Música não localizada!"){
          musica.nome.splice(indice,1);
          musica.compositor.splice(indice,1);
          musica.genero.splice(indice,1);
       }else{
          return "Música não Localizada!"
       }
    }
    
    
    let exibirLista = ()=> {
       console.log(`********** PLAYLIST **********`);
       for(let item in musica.nome){
          console.log(`Música: ${musica.nome[item]}`);
          console.log(`Compositor: ${musica.compositor[item]}`);
          console.log(`Gênero: ${musica.genero[item]}`);
          console.log("------------------------------");
       }
    }
 
 // Adicionar músicas
 adicionar("Oceano", "Djavan", "MPB"); 
 adicionar("Maria, Maria", "Milton Nascimento", "MPB"); 
 
 // Exibir lista apos adcionar
 exibirLista();
 
 // Remover uma música por nome
 // remover("Maria, Maria");
  
 // Exibir lista após a remoção
 // exibirLista();
 
 }
 playList();