//Função que gera um número aleatório de 1-6

const rollOfDice = () => Math.floor(Math.random() * 6 + 1 );

function oneTurn() {
    let diceSum = [];
    for(let i = 0; i < 2; i++){
        diceSum.push(rollOfDice());
        console.log(diceSum)
    }   
    return diceSum.reduce((total,currentElement) => total + currentElement)
} 
