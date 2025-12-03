
// array
let num = [5, 8, 4]

// Add value to the array
num.push(1)

// Sorts array's vectors
num.sort()

// Print array value
console.log(`Our vector is ${num}`)

// Print vector in '0' position from array
console.log(`Our first vector is ${num[0]}`)

// Print array length
console.log(`Our array has ${num.length} vectors`)

// Search value in array and return position
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`Value not found`)
} else {
    console.log(`The position of value 8 is ${pos}`)
}
