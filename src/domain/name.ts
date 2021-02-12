import NameIsRequired from './error/name-is-required';

export default class Name {
    private _name!: string;
    private _firstSurname!: string;

    constructor({name, firstSurname}: {name: string, firstSurname?: string}) {
        this.name = name;

        if (firstSurname) {
            this.firstSurname = firstSurname;
        }
    }

    set name(value: string) {
        if (!value) {
            throw new NameIsRequired('User name is required');
        }
        this._name = value;
    }

    get name(): string {
        return this._name;
    }

    set firstSurname(value: string) {
        this._firstSurname = value;
    }

    get firstSurname(): string {
        return this._firstSurname;
    }

    get fullName(): string {
        return `${this._name} ${this._firstSurname}`;
    }
}