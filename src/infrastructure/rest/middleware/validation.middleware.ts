import {validate, ValidationError} from 'class-validator';
import * as express from 'express';
import HttpException from '../http-exception';

export default function validationMiddleware(): express.RequestHandler {
    return (req, res, next) => {
        validate(req.body)
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    // @ts-ignore
                    const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                    next(new HttpException(400, message));
                } else {
                    next();
                }
            });
    };
}