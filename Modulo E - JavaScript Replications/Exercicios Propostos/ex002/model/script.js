function count() {
    let start = document.getElementById('txts')
    let end = document.getElementById('txte')
    let step = document.getElementById('txtst')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible to count!'
    } else {
        res.innerHTML = 'Counting: </br>'
        let s = Number(start.value)
        let e = Number(end.value)
        let st = Number(step.value)

        if(st <= 0) {
            res.innerHTML = 'Invalid step value! Step must be at least 1. </br>'
            st = 1
        }

        if(s < e) {
            // Increasing count
            for(let c = s; c <= e; c += st) {
            res.innerHTML += ` ${c} \u{1F449}`
            }

        } else {
            // Countdown
            for(let c = s; c >= e; c -= st) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}