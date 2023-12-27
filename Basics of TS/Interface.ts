interface Computer {
    name: string;
    ram: string;
    size?: number;

    connect(adpter: string): void;
}

let dell: Computer;

dell = {
    name: "lap1307",
    ram: "8gb",

    connect(adapter: string): void {
        console.log(`power on connected to adpter ${adapter}`);
    }
}

dell.connect("adpter1");
console.log(dell);

interface HttpConnection {
    createConnection(url: string): void;
}

class MakeConnection implements HttpConnection {
    private headers: string[];
    private body: string;

    constructor(headers: string[], body: string) {
        this.body = body;
        this.headers = headers;
    }

    createConnection(url: string): void {
        console.log(`connection created to the ${url}`);
    }
}



interface Patient {
    name: string;
}

interface Client extends Patient {
    rating: number;
}

class Tanent implements Client {
    rating: number;
    name: string;
    constructor(rating: number, name: string) {
        this.rating = rating;
        this.name = name;
    }
}



interface Calculate {
    (number1: number, number2: number): number;
}

let cal: Calculate;

cal = (a: number, b: number) => {
    return a + b;
}

console.log(cal(9, 9));