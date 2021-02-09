import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import * as express from 'express';
import HttpException from '../http-exception';

export default function validationMiddleware<T>(type: any): express.RequestHandler {
    return (req, res, next) => {
        console.log(type);
        console.log(req.body);
        validate(plainToClass(type, req.body))
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    // @ts-ignore
                    const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                    next(new HttpException(400, message));
                } else {
                    req.body = plainToClass(type, req.body);
                    next();
                }
            });
    };
}