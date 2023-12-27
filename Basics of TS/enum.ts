enum Role{
    ROLE_USER = "user",
    ROLE_ADMIN = "admin",
    ROLE_SYSADMIN = "sys_admin"
}

let user: { name: string, role: Role };
user = { name: "vaishnav", role: Role.ROLE_ADMIN };
console.log(user);