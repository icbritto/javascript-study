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
        window.alert('OK')
    } else {
        window.alert('Invalid value or already exists.')
    }
}