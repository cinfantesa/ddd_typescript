import {inject} from 'inversify';
import {controller, httpPost, request, requestBody, response} from 'inversify-express-utils';
import RegisterUser from '../../application/register-user/register-user';
import {check} from 'express-validator';

const VALIDATIONS = [check('id').notEmpty()];

@controller('/')
export class PutRegisterUserController {
    constructor(@inject('registerUser') private registerUser: RegisterUser) {
    }

    @httpPost('/', ...VALIDATIONS)
    public async get(@request() req: Request, @response() res: Response) {
        this.registerUser.register();
        return { status: 'OK' };
    }
}