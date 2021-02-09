import {inject} from 'inversify';
import {controller, httpPost} from 'inversify-express-utils';
import RegisterUser from '../../application/register-user/register-user';
import RegisterUserRequest from './register-user.request';
import validationMiddleware from './middleware/validation.middleware';
import {Request, Response} from 'express';
import parseBodyMiddleware from './middleware/parse-body.middleware';

@controller('/')
export class PutRegisterUserController {
    constructor(@inject('registerUser') private registerUser: RegisterUser) {
    }

    @httpPost('/', parseBodyMiddleware(RegisterUserRequest), validationMiddleware())
    public async get(request: Request, response: Response) {
        console.log(request.body);
        this.registerUser.register();
        return { status: 'OK' };
    }
}