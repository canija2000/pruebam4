

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

// Class Leon
class Leon extends Animal {
    constructor(name,edad, img, comentario, sound) {
        super(name,edad, img, comentario, sound);
    }

    Rugir() {
        return `<audio src="${this.Sound}" autoplay></audio>`;
    }
}

// Class Lobo
class Lobo extends Animal {
    constructor(name,edad, img, comentario, sound) {
        super(name,edad, img, comentario, sound);
    }

    Aullar() {
        return `<audio src="${this.Sound}" autoplay></audio>`;
    }
}

// Class Oso

class Oso extends Animal {
    constructor(name,edad, img, comentario, sound) {
        super(name,edad, img, comentario, sound);
    }

    Grunir() {
        return `<audio src="${this.Sound}" autoplay></audio>`;
    }
}

// Class Serpiente

class Serpiente extends Animal {
    constructor(name,edad, img, comentario, sound) {
        super(name,edad, img, comentario, sound);
    }

    Sisear() {
        return `<audio src="${this.Sound}" autoplay></audio>`;
    }
}

// Class Aguila

class Aguila extends Animal {
    constructor(name,edad, img, comentario, sound) {
        super(name,edad, img, comentario, sound);
    }

    Chillar() {
        return `<audio src="${this.Sound}" autoplay></audio>`;
    }
}


export { Animal,Leon, Lobo,Oso,Serpiente,Aguila }