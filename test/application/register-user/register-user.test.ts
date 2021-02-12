import 'reflect-metadata';
import RegisterUser from '../../../src/application/register-user/register-user';
import RegisterUserCommand from '../../../src/application/register-user/register-user.command';
import User from '../../../src/domain/user';
import Name from '../../../src/domain/name';

describe('Register user', () => {
  const userRepositoryMock = {
    save: jest.fn(),
    existsByUsername: jest.fn()
  };
  let registerUser: RegisterUser;

  beforeEach(() => {
    registerUser = new RegisterUser(userRepositoryMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should throw error user already exists', async () => {
    userRepositoryMock.existsByUsername.mockReturnValue(true);
    const command = new RegisterUserCommand({
      username: 'username',
      mail: 'test@mail.com',
      name: 'name'
    });

    await expect(registerUser.register(command))
      .rejects.toThrow('User already exists');

    expect(userRepositoryMock.existsByUsername).toHaveBeenCalledTimes(1);
    expect(userRepositoryMock.existsByUsername).toHaveBeenCalledWith(command.username);
    expect(userRepositoryMock.save).toHaveBeenCalledTimes(0);
  });

  test('should save user', async () => {
    userRepositoryMock.existsByUsername.mockReturnValue(false);
    userRepositoryMock.save.mockReturnValue({});
    const command = new RegisterUserCommand({
      username: 'username',
      mail: 'test@mail.com',
      name: 'name'
    });

    await registerUser.register(command);

    expect(userRepositoryMock.existsByUsername).toHaveBeenCalledTimes(1);
    expect(userRepositoryMock.existsByUsername).toHaveBeenCalledWith(command.username);
    expect(userRepositoryMock.save).toHaveBeenCalledTimes(1);
    const expectedUser = new User({
      username: command.username,
      mail: command.mail,
      name: new Name({name: command.name})
    });
    expect(userRepositoryMock.save).toHaveBeenCalledWith(expectedUser);
  });
});