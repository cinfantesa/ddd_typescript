import UserRepository from '../../domain/user.repository';
import {injectable} from 'inversify';

@injectable()
export default class ConsoleUserRepository implements UserRepository {
    save(): void {
        console.log('saved');
    }
}