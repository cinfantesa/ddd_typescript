import {inject} from 'inversify';
import {controller, httpPost, request, response} from 'inversify-express-utils';
import RegisterUser from '../../application/register-user/register-user';
import RegisterUserRequest from './register-user-request';
import validationMiddleware from './middleware/validation-middleware';
import {Request, Response} from 'express';

@controller('/')
export class PutRegisterUserController {
    constructor(@inject('registerUser') private registerUser: RegisterUser) {
    }

    @httpPost('/', validationMiddleware(RegisterUserRequest))
    public async get(@request() req: Request, @response() res: Response) {
        this.registerUser.register();
        return { status: 'OK' };
    }
}