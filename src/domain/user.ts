import Name from './name';
import EmailIsRequired from './error/email-is-required';
import UsernameIsRequired from './error/username-is-required';

export default class User {
  private _username!: string;
  private _mail!: string;
  private _name!: Name;

  constructor({username, mail, name}: { username: string, mail: string, name: Name }) {
    this.username = username;
    this.mail = mail;
    this.name = name;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    if (!value) {
      throw new UsernameIsRequired('Username is required');
    }
    this._username = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    if (!value) {
      throw new EmailIsRequired('Email is required');
    }
    this._mail = value;
  }

  get name(): Name {
    return this._name;
  }

  set name(value: Name) {
    this._name = value;
  }
}