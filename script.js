//Função que gera um número aleatório de 1-6

const rollOfDice = () => Math.floor(Math.random() * 6 + 1 );

function oneTurn() {
    let diceSum = [];
    for(let i = 0; i < 2; i++){
        diceSum.push(rollOfDice());
    }   
    return diceSum.reduce((total,currentElement) => total + currentElement)
} 

const allTurns = ()  => {
    let resultado = [];
    const count = [0,0,0,0,0,0,0,0,0,0,0]
     for(let j = 0; j<=1000; j++){
         resultado = oneTurn()
         count[resultado-2]++//count[resultado-2] = count[resultado-2] +1 
       
    }
    
    return count;
}

let diceResults = allTurns();

const criarBarra = () => {
   for(let contador = 0; contador < diceResults.length; contador++){
       let barra = document.createElement("div");
       let titulo = document.createElement("h3")
       titulo.className = "titulo"
       barra.className = "barras";
       barra.style.width = `${diceResults[contador]}px`
      

       let textIndice = document.createTextNode(contador +2);
       barra.appendChild(textIndice);

       titulo.innerText = "O número acima apareceu " + diceResults[contador] + " vezes!"
        

       let destino = document.getElementById("bars")
       destino.appendChild(barra);
       destino.appendChild(titulo);
   }

} 

criarBarra();
  
//jogar os dados - 4
//guardar o resultado dos dados 
//encontrar o indice referente ao resultado count[resultado-2] 
//somar +1 no valor do indice

//Função que cria o elemento HTML com o tamanho dos indices de count




