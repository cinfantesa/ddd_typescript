import {inject} from 'inversify';
import {controller, httpPost} from 'inversify-express-utils';
import RegisterUser from '../../application/register-user/register-user';
import RegisterUserRequest from './register-user.request';
import validateBody from './middleware/validation.middleware';
import {NextFunction, Request, Response} from 'express';
import parseBody from './middleware/parse-body.middleware';
import RegisterUserCommand from '../../application/register-user/register-user.command';

@controller('/')
export class PutRegisterUserController {
  constructor(@inject('registerUser') private registerUser: RegisterUser) {
  }

  @httpPost('/', parseBody(RegisterUserRequest), validateBody())
  public async get(request: Request, response: Response, next: NextFunction) {
    const body: RegisterUserRequest = request.body;
    const command = new RegisterUserCommand({
      username: body.username,
      mail: body.mail,
      name: body.name,
      firstSurname: body.firstSurname
    });

    try {
      await this.registerUser.register(command);
      return response.status(200).json({status: 'OK'});
    } catch (err) {
      console.error(err);
      next();
    }
  }
}