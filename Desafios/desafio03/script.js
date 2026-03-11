function verificar(){
    let a1 = Number(document.getElementById('a1').value)
    let an = Number(document.getElementById('an').value)
    let r = Number(document.getElementById('r').value)
    let res = document.getElementById('res')

    res.innerHTML=''

    for(let i = a1; i <= an; i+=r){
        res.innerHTML += `${i} -> `
    }
    res.innerHTML+="!"
        
}
