// exports.soma = function (num1,num2){ //exports.(primeira formsa de ser exportar um modulo/funçao)
//     return num1+num2
// }

// exports.multiplica = function (num1,num2){
//     return num1*num2
// }

//segunda forma
// module.exports = {
//     soma (num1 , num2){
//         return num1 + num2
//     },
//     multiplica(num1 , num2){
//         return num1 * num2
//     }
// }

//terceira forma

function soma (num1 , num2){
    return num1 + num2
}
function   multiplica(num1 , num2){
    return num1 * num2
}
function   subtrair(num1 , num2){
    return num1 * num2
}

module.exports = (subtrair, multiplica, soma)


//forma moderna