function updateUser<T, V>(oldUser: T, newUser: V):T & V {
    return { ...oldUser, ...newUser };
}