export default class RegisterUserCommand {
  private readonly _username: string;
  private readonly _mail: string;
  private readonly _name: string;
  private readonly _firstSurname!: string;

  constructor({ username, mail, name, firstSurname }: { username: string, mail: string, name: string, firstSurname?: string }) {
    this._username = username;
    this._mail = mail;
    this._name = name;
    if (firstSurname) {
      this._firstSurname = firstSurname;
    }
  }

  get username(): string {
    return this._username;
  }

  get mail(): string {
    return this._mail;
  }

  get name(): string {
    return this._name;
  }

  get firstSurname(): string {
    return this._firstSurname;
  }
}