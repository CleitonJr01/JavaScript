var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}h`)
if(hora >=5 && hora < 12){
    console.log('Bom dia')
}else if(hora >=12 && hora <=17){
    console.log('Boa Tarde')
}else if(hora >=18 && hora <= 24 || hora <= 4){
    console.log('Boa Noite') 
}