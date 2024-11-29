//importazione nomi
const createFullName = require('./names');
const result = createFullName('Veronica', 'Magnanimi');
console.log(result)

//importazione hobby
const allMyHobbies = require('./hobbies');
const iLike = allMyHobbies('Ginnastica Artistica', 'Recitazione', 'Viaggi');
console.log(iLike);