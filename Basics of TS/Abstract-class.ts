abstract class Animal {

    constructor(private name: string) {

    }
    abstract printSound(sound: string): void;
}

class Dog extends Animal {
    printSound(sound: string): void {
        console.log(`${sound}...`);
    }
}

const vaghya = new Dog("vaghya");
vaghya.printSound("Barking");
console.log(vaghya);