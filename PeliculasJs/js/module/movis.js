import { connect } from "../../helpers/db/connect.js";


export class movis extends connect {
    static instance;
    constructor() {
        if (typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }

    async getAllMovis() {
        let res = await this.collection.find({}, {}).toArray();
        return res;
    }

    async getGenreAccion() {
    let res = await this.collection.find({
        'genre': { $eq: 'Accion' }
    }, {
        projection: { _id: 0, name: 1, genre: 1 }
    }).toArray();
    return res;
}
    async getformatBluray200() {
    let res = await this.collection.find({
        format: { $elemMatch: { name: 'Bluray', copies: { $gt: 200 } } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getformatBluray200_2() {
    let res = await this.collection.find({
        format: { $elemMatch: { name: 'Bluray', copies: { $gt: 200 } } }
    }, {
        projection: { _id: 0, name: 1, 'format.copies': 1 }
    }).toArray();
    return res;
}
    async getformatDVD10() {
    let res = await this.collection.find({
        format: { $elemMatch: { name: 'dvd', value: { $lt: 10 } } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getCharacterApodoCobb() {
    let res = await this.collection.find({
        'character.apodo': 'Cobb'
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getCharacterActor2AndActor3() {
    let res = await this.collection.find({
        'character.id_actor': { $in: [2, 3] }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getformatBluray() {
    let res = await this.collection.find({
        format: { $elemMatch: { name: 'Bluray' } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getGenreCienciaFiccion() {
    let res = await this.collection.find({
        'genre': { $elemMatch: { $eq: 'Ciencia Ficción' } }
    }, {
        projection: { _id: 0, name: 1, genre: 1 }
    }).toArray();
    return res;
}
    async getCharacterAutorMiguel() {
    let res = await this.collection.find({
        character: { $elemMatch: { rol: 'principal', apodo: 'Miguel' } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getFOrmatCopiers100() {
    let res = await this.collection.find({
        format: { $elemMatch: { copies: { $gt: 100 } } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getCharacterIdActor1() {
    let res = await this.collection.find({
        character: { $elemMatch: { id_actor: { $eq: 1 } } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getCharacterApodoCobb_2() {
    let res = await this.collection.find({
        character: { $elemMatch: { rol: 'principal', apodo: 'Cobb' } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getformatBluray200_3() {
    let res = await this.collection.find({
        format: { $elemMatch: { name: 'Bluray', copies: { $gt: 200 } } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getformatDVD10_2() {
    let res = await this.collection.find({
        format: { $elemMatch: { name: 'dvd', value: { $lt: 10 } } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getCharacterAutorArthur() {
    let res = await this.collection.find({
        character: { $elemMatch: { rol: 'secundario', apodo: 'Arthur' } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
    async getCharacterAutorMiguel_2() {
    let res = await this.collection.find({
        character: { $elemMatch: { rol: 'principal', apodo: 'Miguel' } }
    }, {
        projection: { _id: 0, name: 1 }
    }).toArray();
    return res;
}
}