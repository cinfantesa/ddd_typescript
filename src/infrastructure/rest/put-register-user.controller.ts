import {inject} from 'inversify';
import {controller, httpPost} from 'inversify-express-utils';
import RegisterUser from '../../application/register-user/register-user';
import RegisterUserRequest from './register-user.request';
import validateBody from './middleware/validation.middleware';
import {Request, Response} from 'express';
import parseBody from './middleware/parse-body.middleware';

@controller('/')
export class PutRegisterUserController {
    constructor(@inject('registerUser') private registerUser: RegisterUser) {
    }

    @httpPost('/', parseBody(RegisterUserRequest), validateBody())
    public async get(request: Request, response: Response) {
        this.registerUser.register();
        return { status: 'OK' };
    }
}