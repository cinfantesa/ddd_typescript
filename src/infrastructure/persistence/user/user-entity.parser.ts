import {UserDocument} from './user-document';
import User from '../../../domain/user';
import Name from '../../../domain/name';
import {injectable} from 'inversify';

@injectable()
export default class UserEntityParser implements EntityParser<UserDocument, User> {
  toDomain(entity: UserDocument): User {
    const name = new Name({
      name: entity.name.name,
      firstSurname: entity.name.firstSurname
    });

    return new User({
      username: entity.username,
      mail: entity.mail,
      name
    });
  }

  toEntity(domain: User): UserDocument {
    return {
      username: domain.username,
      mail: domain.mail,
      name: {
        name: domain.name.name,
        firstSurname: domain.name.firstSurname
      }
    };
  }

}