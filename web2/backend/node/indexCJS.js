 // primeira forma de importar
 const operacoes  = require("./operaçoesCJS.js")
 
//  const soma = operacoes.soma(5,4)
//  console.log(soma)

// segunda forma de importar


 const {soma, multiplica} = require("./operaçoesCJS.js");

 console.log(soma(2,23))
 console.log(multiplica(4,4))

 // terceira forma de importar
