import UserRepository from '../../domain/user-repository';

export default class ConsoleUserRepository implements UserRepository {
    save(): void {
        console.log('saved');
    }
}