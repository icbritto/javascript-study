
let friend = {name: 'Igor', 
    sex: 'M', 
    weight: 85.4,
    getfat(p=0) {
        console.log('Gained weight.')
        this.weight += p
    }
}

friend.getfat(2)

console.log(`${friend.name} weight is ${friend.weight}Kg.`)