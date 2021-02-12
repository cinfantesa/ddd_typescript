import User from './user';

export default interface UserRepository {
  save(user: User): Promise<void>;

  existsByUsername(username: string): Promise<boolean>;
}