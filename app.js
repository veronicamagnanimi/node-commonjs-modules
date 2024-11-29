//importazione nomi
const createFullName = require('./names');
const result = createFullName('Veronica', 'Magnanimi');
console.log(result)

//importazione hobby
const allMyHobbies = require('./hobbies');
const iLike = allMyHobbies('Ginnastica Artistica', 'Recitazione', 'Viaggi');
console.log(iLike);

//funzione senza parametri 
function nameHobbies () {
    return {
        fullName: result,
        hobbies: iLike
    }
}

console.log(nameHobbies());