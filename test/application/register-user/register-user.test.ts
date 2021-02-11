import 'reflect-metadata';
import RegisterUser from '../../../src/application/register-user/register-user';
import RegisterUserCommand from '../../../src/application/register-user/register-user.command';
import UserAlreadyExists from '../../../src/domain/error/user-already-exists';

describe('Register user', () => {
    const userRepositoryMock = {
        save: jest.fn(),
        existsByUsername: jest.fn()
    };
    let registerUser: RegisterUser;

    beforeEach(() => {
        registerUser = new RegisterUser(userRepositoryMock);
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
    });
});