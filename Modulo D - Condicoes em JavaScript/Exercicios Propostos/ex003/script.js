
function load() {
    let msg = document.querySelector('div.msg')
    let photo = document.querySelector('div.photo')
    let data = new Date()
    let hour = data.getHours()

    msg.innerHTML = `Agora sao ${hour} horas.`

    if (hour >= 0 && hour < 12) {
        //Bom dia!
        photo.src = 'images/morning.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        //Boa tarde!
        photo.src = 'images/afternoon.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        photo.src = 'images/night.jpg'
        document.body.style.background = '#131313ff'
    }
}