import ApplicationError from './application.error';

export default class UserAlreadyExists extends ApplicationError {
  constructor() {
    super('User already exists');
    this.name = 'UserAlreadyExists';
  }
}