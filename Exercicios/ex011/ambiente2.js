let valores = [8,1,7,4,2,9]
/*let valores = [8,1,7,4,2,9]
for(let p = 0;p<valores.length;p++){
    console.log(`A posiçao ${[p]} tem o valor ${valores[p]}`)
}*/
/*for(let pos in valores){
    console.log(`A posiçao ${[pos]} tem o valor ${valores[pos]}`)
}*/
console.log(valores)
let pos = valores.indexOf(8)
let posf = pos + 1
if(pos == -1){
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor esta na posição ${posf}`)
}
