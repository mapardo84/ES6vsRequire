//Forma 1, similar a java
import * as mod1  from "./modulo1"
//Forma 2, manera especifica, solo se toma lo que se necesite
import {sumar, saludar} from "./modulo1"
import {multiplicacion,division} from "./modulo2"

//Forma 3, utilizando el export por defecto en el modulo 3
import defecto from "./modulo3"
console.log("UTILIZANDO FORMA 1")
console.log(mod1.sumar(1,2))
console.log("UTILIZANDO FORMA 2")
console.log(saludar())
console.log("UTILIZANDO FORMA 3")
console.log(defecto("a"))
