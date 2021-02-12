import ApplicationError from './application.error';

export default class UsernameIsRequired extends ApplicationError {
  constructor(message: string) {
    super(message);
    this.name = 'UsernameIsRequired';
  }
}