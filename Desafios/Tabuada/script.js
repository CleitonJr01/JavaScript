function verificar(){
    var numero = document.querySelector('input#txtn')
    var list = document.getElementById('seltab')
    list.innerHTML = ''
    if (numero.value.length == 0){
    window.alert('Por Favor digite um numero')
}else{
    var n = Number(numero.value)
    for(var c = 1; c <= 10 ;c++){
        var item = document.createElement('option')
        item.value = `tab${c}`
        item.text = `${n} x ${c} = ${n*c}`
        list.appendChild(item)
    }
}
    
}
