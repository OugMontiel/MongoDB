//npm update actualiza las dependendencias, busca nuevas versiones etc

import {connect} from './helpers/db/connect.js';
import { movis } from './js/module/movis.js';


// let obj2 = new connect("Carlos")
// console.log(obj2)
let mongo = new movis()
console.log(await mongo.getAllMovis());

console.log( await mongo.getGenreAccion() );
console.log( await mongo.getformatBluray200() );
console.log( await mongo.getformatBluray200_2() );
console.log( await mongo.getformatDVD10() );
console.log( await mongo.getCharacterApodoCobb() );
console.log( await mongo.getCharacterActor2AndActor3() );
console.log( await mongo.getformatBluray() );
console.log( await mongo.getGenreCienciaFiccion() );
console.log( await mongo.getCharacterAutorMiguel() );
console.log( await mongo.getFOrmatCopiers100() );
console.log( await mongo.getCharacterIdActor1() );
console.log( await mongo.getCharacterApodoCobb_2() );
console.log( await mongo.getformatBluray200_3() );
console.log( await mongo.getformatDVD10_2() );
console.log( await mongo.getCharacterAutorArthur() );
console.log( await mongo.getCharacterAutorMiguel_2() );