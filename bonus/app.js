//nomi
import fullName from "./names.js";
const result = fullName('Veronica', 'Magnanimi');

import chalk from 'chalk';
console.log(chalk.bgGray(result));

//hobby
import evening from "./hobbies.js";
const iLike = evening('Ginnastica Artistica', 'Recitazione', 'Viaggi');
console.log(iLike);