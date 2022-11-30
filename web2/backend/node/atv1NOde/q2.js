var resultadoFatorial = 0;
var valor = 0;
var conta = 0


const readline = require("readline")
const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

teclado.question("digite o valor 1: ", (valor1) => {
    valor = parseInt(valor1)
    while(valor > 0){
      
        conta =+ conta * valor
        valor--
        if(valor ==0){

            break;
        }
    }
    resultadoFatorial = conta
    console.log(`resultado é ${resultadoFatorial}`)

})