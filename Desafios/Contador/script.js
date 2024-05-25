function contar(){
var inicio = document.querySelector('input#txti')
var fim = document.querySelector('input#txtf')
var passo = document.querySelector('input#txtp')
var res = document.querySelector('div#res')

var ni = Number(inicio.value)
var nf = Number(fim.value)
var p = Number(passo.value)
res.innerHTML = ''
  if(p <=0 ){
    window.alert('[ERRO] Você esqueceu de colocar o passo ou foi menor que 0 e ele foi redefinido para 1')
    p = 1
  }

if (ni < nf){
for(var c = ni ; c <= nf; c+=p){
    res.innerHTML += `${c} \u{1F449}`
}res.innerHTML += `\u{1F3C1}`
}else if (ni > nf){
    for(var c = ni ; c >= nf; c-=p){
        res.innerHTML += `${c} \u{1F449}`
    }res.innerHTML += `\u{1F3C1}` 
}
}
