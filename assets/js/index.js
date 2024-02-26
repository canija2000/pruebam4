

// Class Animal

class Animal {
    constructor(name,edad, img, comentario, sound) {
        this._name = name;
        this._edad = edad;
        this._img = img;
        this._comentario = comentario;
        this._sound = sound;
    }

    get Name() {
        return this._name;
    }

    get Edad() {
        return this._edad;
    }

    get Img() {
        return this._img;
    }

    get Comentario() {
        return this._comentario;
    }

    get Sound() {
        return this._sound;
    }


}