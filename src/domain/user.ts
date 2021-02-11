import Name from './name';

export default class User {
    private _username!: string;
    private _mail!: string;
    private _name!: Name;

    constructor({username, mail, name}: {username: string, mail: string, name:Name}) {
        this.username = username;
        this.mail = mail;
        this.name = name;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(value: string) {
        this._mail = value;
    }

    get name(): Name {
        return this._name;
    }

    set name(value: Name) {
        this._name = value;
    }
}