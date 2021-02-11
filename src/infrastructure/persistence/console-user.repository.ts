import UserRepository from '../../domain/user.repository';
import {injectable} from 'inversify';

@injectable()
export default class ConsoleUserRepository implements UserRepository {
    async existsByUsername(username: string): Promise<boolean> {
        console.log('exists');
        return Promise.resolve(false);
    }

    async save(): Promise<void> {
        console.log('saved');
    }
}