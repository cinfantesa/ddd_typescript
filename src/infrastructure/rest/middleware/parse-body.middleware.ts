import {plainToClass} from 'class-transformer';
import * as express from 'express';

export default function parseBody<T>(type: any): express.RequestHandler {
    return (req, res, next) => {
        req.body = plainToClass(type, req.body);
        next();
    };
}