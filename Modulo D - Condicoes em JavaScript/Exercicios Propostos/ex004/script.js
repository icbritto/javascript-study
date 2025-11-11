
function verif() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.querySelector('input.txtyear')
    let res = document.querySelector('div.res')

    if (fyear.value.length == 0 || fyear.value > year) {
        res.innerHTML = ('[ERRO] Verifique os dados e tente novamente.')
    } else {
        let fsex = document.getElementsByName('radsex')
        let age = year - Number(fyear.value)
        let gender = ''
        let img = document.createElement('img')

        img.setAttribute('class', 'photo')

        if (fsex[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age < 10) {
                //Crianca
                img.setAttribute('src','images/morning.jpg')
            }
            if (age >= 10 && age < 21) {
                //Adolescente
                img.setAttribute('src','images/afternoon.jpg')
            }
            if (age >= 21 && age < 60) {
                //Adulto
                img.setAttribute('src','images/night.jpg')
            }
            if (age >= 60) {
                //Idoso
                img.setAttribute('src','images/afternoon.jpg')
            }
        } else if (fsex[1].checked) {
            gender = 'Mulher'
            if (age >= 0 && age < 10) {
                //Crianca
                img.setAttribute('src','images/morning.jpg')
            }
            if (age >= 10 && age < 21) {
                //Adolescente
                img.setAttribute('src','images/afternoon.jpg')
            }
            if (age >= 21 && age < 60) {
                //Adulto
                img.setAttribute('src','images/night.jpg')
            }
            if (age >= 60) {
                //Idoso
                img.setAttribute('src','images/afternoon.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}