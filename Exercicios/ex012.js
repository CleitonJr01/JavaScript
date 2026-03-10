let agora = new Date()
let horas = agora.getHours()
console.log(`Agora são ${horas} horas`)

if (horas >= 5 && horas <= 12){
    console.log("Bom dia")
}else if (horas>12&&horas<18){
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}