import {Container} from 'inversify';
import RegisterUser from './application/register-user/register-user';
import UserRepository from './domain/user.repository';
import MongoUserRepository from './infrastructure/persistence/user/mongo-user.repository';
import MongooseUserRepository from './infrastructure/persistence/user/mongoose-user-repository';
import UserEntityParser from './infrastructure/persistence/user/user-entity.parser';

export default class ContainerConfiguration {
  private readonly _container: Container;

  constructor() {
    this._container = new Container();
    this._container.bind<RegisterUser>('registerUser').to(RegisterUser).inRequestScope();
    this._container.bind<UserRepository>('userRepository').to(MongoUserRepository).inSingletonScope();
    this._container.bind<MongooseUserRepository>('mongooseUserRepository').to(MongooseUserRepository).inSingletonScope();
    this._container.bind<UserEntityParser>('userEntityParser').to(UserEntityParser).inRequestScope();
  }

  get container(): Container {
    return this._container;
  }
}