import {IsNotEmpty, IsString} from 'class-validator';

export default class RegisterUserRequest {
    @IsString()
    @IsNotEmpty()
    id: string = '';
    @IsString()
    name: string = '';
    @IsString()
    @IsNotEmpty()
    password: string = '';
}