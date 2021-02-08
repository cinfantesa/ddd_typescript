import {Container} from 'inversify';
import RegisterUser from './application/register-user/register-user';
import UserRepository from './domain/user-repository';
import ConsoleUserRepository from './infrastructure/persistence/console-user-repository';

export default class ContainerConfiguration {
    private readonly _container: Container;

    constructor() {
        this._container = new Container();
        this._container.bind<RegisterUser>('registerUser').to(RegisterUser).inRequestScope();
        this._container.bind<UserRepository>('userRepository').to(ConsoleUserRepository).inSingletonScope();
    }

    get container(): Container {
        return this._container;
    }
}