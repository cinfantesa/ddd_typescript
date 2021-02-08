import { inject } from 'inversify';
import {controller, httpGet} from 'inversify-express-utils';
import RegisterUser from '../../application/register-user/register-user';

@controller('/')
export class PutRegisterUserController {
    constructor(@inject('registerUser') private registerUser: RegisterUser) {
    }

    @httpGet('/')
    public get(): object {
        this.registerUser.register();
        return { status: 'OK' };
    }
}