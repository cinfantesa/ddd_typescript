import ApplicationError from './application.error';

export default class EmailIsRequired extends ApplicationError {
    constructor(message: string) {
        super(message);
        this.name = 'EmailIsRequired';
    }
}