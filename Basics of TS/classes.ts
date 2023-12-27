class Person {
    static planet: string = "Earth";

    private firstName: string;
    private age: number;


    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    getName(): string {
        return this.firstName;
    }

    setName(changedName: string): void {
        this.firstName = changedName;
    }

    printName() {
        console.log(`your name is ${this.firstName}, and your age is ${this.age}`)
    }
}

class IndianCitizen extends Person{

}


const vaishnav = new Person("vaishnav", 24);
vaishnav.printName();
vaishnav.setName("chotya");
console.log(vaishnav.getName());

const chotya = new IndianCitizen("chotya", 21);
console.log(chotya);

console.log(Person.planet);

