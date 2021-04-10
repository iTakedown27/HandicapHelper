class Profile {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    printName() {
        return this.login;
    }
}