import UserRepository from '../../../domain/user.repository';
import {inject, injectable} from 'inversify';
import MongooseUserRepository from './mongoose-user-repository';
import {Document, Model} from 'mongoose';
import {UserDocument} from './user-document';
import User from '../../../domain/user';
import UserEntityParser from './user-entity.parser';

@injectable()
export default class MongoUserRepository implements UserRepository {
  private mongooseUserModel: Model<UserDocument & Document>;

  constructor(
    @inject('mongooseUserRepository') mongooseUserRepository: MongooseUserRepository,
    @inject('userEntityParser') private userEntityParser: UserEntityParser
  ) {
    this.mongooseUserModel = mongooseUserRepository.model;
  }

  async existsByUsername(username: string): Promise<boolean> {
    console.log('exists');
    return this.mongooseUserModel.exists({username});
  }

  async save(user: User): Promise<void> {
    const document: UserDocument = this.userEntityParser.toEntity(user);
    await this.mongooseUserModel.create(document);
    console.log('saved');
  }
} 