import {inject, injectable} from 'inversify';
import UserRepository from '../../domain/user.repository';

@injectable()
export default class RegisterUser {
    constructor(@inject('userRepository') private userRepository: UserRepository) {
    }

    register(): void {
        console.log('registered');
        this.userRepository.save();
    }
}