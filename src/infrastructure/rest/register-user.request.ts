import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export default class RegisterUserRequest {
    @IsString()
    @IsNotEmpty()
    username: string = '';
    @IsEmail()
    @IsNotEmpty()
    mail: string = '';
    @IsString()
    @IsNotEmpty()
    name: string = '';
    @IsString()
    firstSurname: string = '';
}