import { IsEmail, IsString, MinLength } from "class-validator"


export class AuthDto {
    @IsEmail()
    email: string

    @IsString()
    @MinLength(6, {
        message: 'Ваш пароль должен быть не менее 6 символов'
    })
    password: string
}