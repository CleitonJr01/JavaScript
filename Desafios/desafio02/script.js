function verificar(){   
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') 
    let res = document.getElementById('res')
    if(fano.value>ano||fano.value==0){
        window.alert("Verifique os dados e tente novamente")
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade<10){
               img.setAttribute('src', 'bebem.jpg') 
            }else if (idade>=10 && idade <= 18){
                img.setAttribute('src', 'jovemm.jpg') 
            }else if (idade > 18 && idade < 50){
                img.setAttribute('src', 'adulto.jpg') 
            }else if (idade >= 50){
                img.setAttribute('src', 'idoso.jpg') 
            }
        }else{
            genero = 'Mulher'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'bebef.jpg') 
            }else if (idade>=10 && idade <= 18){
                img.setAttribute('src', 'jovemf.jpg') 
            }else if (idade > 18 && idade < 50){
                img.setAttribute('src', 'adulta.jpg') 
            }else if (idade >= 50){
                img.setAttribute('src', 'idosa.jpg') 
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos um(a) ${genero} de ${idade} anos `
        res.appendChild(img)
    }
}