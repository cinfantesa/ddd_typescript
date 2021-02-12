import ApplicationError from './application.error';

export default class NameIsRequired extends ApplicationError {
  constructor(message: string) {
    super(message);
    this.name = 'NameIsRequiredError';
  }
}