import {inject, injectable} from 'inversify';
import UserRepository from '../../domain/user.repository';
import RegisterUserCommand from './register-user.command';
import Name from '../../domain/name';
import UserAlreadyExists from '../../domain/error/user-already-exists';
import User from '../../domain/user';

@injectable()
export default class RegisterUser {
    constructor(@inject('userRepository') private userRepository: UserRepository) {
    }

    async register(command: RegisterUserCommand): Promise<void> {
        await this._ensureUserDoesNotExist(command.username);
        const name = new Name({
            name: command.name,
            firstSurname: command.firstSurname,
        });
        const user = new User({
            username: command.username,
            name,
            mail: command.mail
        });

        await this.userRepository.save(user);
    }

    private async _ensureUserDoesNotExist(username: string): Promise<void> {
        if (await this.userRepository.existsByUsername(username)) {
            throw new UserAlreadyExists();
        }
    }
}