const { type } = require("node:os");

function isPositive(x){
    if(x > 0){
        return true
    }
    else if(x == 0){
        return false
    }
    else if(x < 0){
        throw new Error("Valor Inválido");
    }

    else if(typeof(x) !== "number"){
        throw new Error("A Entrada deve ser um número");
    }
}
module.exports = isPositive;
console.log(typeof(-7))