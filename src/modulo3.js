function aux1(a){
    return "#"+a;
}
function aux2(a){
    return "@"+a
}

export default function agregarSimbolos(str){
    return aux2(aux1(str))
}