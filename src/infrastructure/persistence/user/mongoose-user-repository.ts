import {Document, model, Model} from 'mongoose';
import {UserDocument, UserSchema} from './user-document';
import {injectable} from 'inversify';

@injectable()
export default class MongooseUserRepository {
  private readonly _repository:  Model<UserDocument & Document>

  constructor() {
    this._repository = model<UserDocument & Document>('User', UserSchema);
  }

  get model(): Model<UserDocument & Document> {
    return this._repository;
  }
}