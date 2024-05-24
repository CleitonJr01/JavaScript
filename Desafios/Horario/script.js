function carregar(){
    var msg = document.querySelector('div#hrs')
    var foto = document.querySelector('img#imgg')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML= ` Agora são ${hora} horas `
    if(hora >= 5 && hora < 12){
        document.body.style.backgroundColor = 'rgb(221, 191, 134)'
        foto.src='dia.png'
    }else if (hora >= 12 &&hora < 18){
        document.body.style.backgroundColor = '#eb9468'
        foto.src= 'tarde.png'
    }else{
        document.body.style.backgroundColor = '#00103c'
        foto.src= 'noite.png'
    }

}