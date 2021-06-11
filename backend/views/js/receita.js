 
function recebeDados(){
 

   let nome = document.getElementById('nomeReceita').value;
  let valor = document.getElementById('valorReceita').value;
  let descricao = document.getElementById('descReceita').value;
  let recorrenciaReceita = document.getElementById('recorrenciaReceita').value;
  let dataReceita = document.getElementById('dataReceita').value;
  
  const api = axios.create({
    baseUrl: 'http://localhost:8686/1/receita'
  });
  
  
  var dados = {
    NOMERECEITA:nome,
    DESCRICAORECEITA:descricao,
    DATARECEITA:dataReceita,
    VALORRECEITA:Number(valor),
    RECORRENCIARECEITA:Number(recorrenciaReceita),
    FK_CONTA:1,
    FK_CATDES:1
  }
  console.log(dados)

    insere(dados)  
 

  }
 

  async function insere(dados,result){
    
    await  axios.post("http://localhost:8686/1/receita",dados)
    .then(res=>{
    alert("Inserido")
    console.log(dados) 
  }).catch(err =>{
    alert(err) 
    // console.log(err)
  })
    
  } 


function carregaCat(){
  // const routes = require('../../../../backend/routes/routes');
  const axios = require('axios')
  
  const controller = require('../../../../backend/controllers/CatReceitaController');

  // console.log(routes.CatReceitaController.index);  
  console.log(controller.index);

  

}
