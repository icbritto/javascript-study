let values = [8, 1, 7, 4, 2, 9]

// console.log(values)

// for(let pos=0; pos < values.length; pos++) {
//     console.log(`We have the value ${values} in the ${values[pos]} position.`)
// }

for(let pos in values) {
    console.log(`We have the value ${pos} in the ${values[pos]} position.`)
}
