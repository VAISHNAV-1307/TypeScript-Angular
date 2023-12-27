function add(a: number, b: number) {
    return a + b;
}

console.log(add(5, 9));

// Arrow function ->
let multiply = (a: number, b: number): number => {
    return a * b;
}

console.log(multiply(1, 1));

// rest parameters
function printNames(firstName: string, ...allTheRest: string[]) {
    return firstName + allTheRest.join(" ");
}

console.log("vaishnav", "chotya", "pamya", "abhya");

