let userType: 'user' | 'admin';

userType = "admin"; 


function saveUser(userId: number, type: "user" | "admin"): void {
    if (type === "user") {
        console.log(`saving an user : \n ${userId}, ${type}`);
    } else {
        console.log(`saving an admin : \n ${userId}, ${type}`);
    }
}

saveUser(7, "user");
saveUser(7, "admin");

type BINARY = 0 | 1;
let client: BINARY;
client = 0;
