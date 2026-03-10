function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let agora = new Date()
    let hora = agora.getHours()
    msg.innerHTML = `Agora sâo ${hora} horas`

    if(hora>=6&&hora<=12){
        document.body.style.background = '#B69C95'
        img.src = 'fotomanha.jpg'
    }else if(hora>12&&hora<18){
        document.body.style.background = '#C85F16'
        img.src = 'fototarde.jpg'
    }else{
        document.body.style.background = '#192E29'
        img.src = 'fotonoite.jpg'
    }
}