
//Forma 1, la mas feita
import * as mod1  from "./modulo1"
//Forma 2, manera especifica, solo se toma lo que se necesite
import {saludar} from "./modulo1"
import {multiplicacion,division} from "./modulo2.js"

//Forma 3, utilizando el export por defecto (ver el modulo 3)
import defecto from "./modulo3"

//UTILIZANDO REQUIRE ANTIGUO
var moduloConRequire = require("./modulo5")


console.log("UTILIZANDO FORMA 1")
console.log(mod1.sumar(1,2))
console.log("UTILIZANDO FORMA 2")
console.log(saludar())
console.log("UTILIZANDO FORMA 3")
console.log(defecto("a"))

console.log("UTILIZANDO REQUIRE")
console.log(moduloConRequire.sumar(1,2))

