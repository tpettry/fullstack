//ES2020
//BigInt
    // allows to complete calculations beyond safe integer within Javascript
//Nullish . Coalescing . Operator  ??

let will_pokemon = {
    pikachu : {
        species: 'Mouse pokemon',
        height: .4,
        weight: 6,
        power: 'lighting'
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse pokemon',
        height: .8,
        weight: 30
    }
}
let weight3 = andrei_pokemon?.pikachu?.power ?? 'no power'

console.log(weight3)
//this would throw an undefined 

//Optional . chaining . operator  ?.
    let will_pokemon = {
        pikachu : {
            species: 'Mouse pokemon',
            height: .4,
            weight: 6,
            
        }
    }

    let andrei_pokemon = {
        raichu: {
            species: 'Mouse pokemon',
            height: .8,
            weight: 30
        }
    }
let weight3 = andrei_pokemon?.pikachu?.weight

console.log(weight3)
//this would throw an undefined 