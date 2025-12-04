let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addnum() {
    if (isNum(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        
        let item = document.createElement('option')

        item.text = num.value
        list.appendChild(item)

        res.innerHTML = ''
        res.innerHTML = `The value <strong>${num.value}</strong> has been added.`

    } else {
        window.alert('Invalid value or already exists.')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (values.length == 0) {
        window.alert('Must add any value to finish.')
    } else {
        let total = values.length
        let bigger = values[0]
        let smallest = values[0]
        let sum = 0
        let average = 0

        for (let pos in values) {
            sum += values[pos]
            if (values[pos] > bigger)
                bigger = values[pos]
            if (values[pos] < smallest)
                smallest = values[pos]
        }

        average = sum / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>Total of <strong>${total} registed numbers.</strong></p>`
        res.innerHTML += `<p>The <strong>biggest</strong> value registed is <strong>${bigger}</strong></p>`
        res.innerHTML += `<p>The <strong>smallest</strong> value registed is <strong>${smallest}</strong></p>`
        res.innerHTML += `<p>The total <strong>sum</strong> of the values is <strong>${sum}</strong></p>`
        res.innerHTML += `<p>The <strong>average</strong> of the values is <strong>${average}</strong></p>`
    }
}