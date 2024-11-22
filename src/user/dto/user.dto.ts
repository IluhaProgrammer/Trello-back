import { IsEmail, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator"

export class PomadoroSettingsDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    workInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    breakInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(10)
    intervalCount?: number
}

export class UserDto extends PomadoroSettingsDto {
    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    name?: string

    @IsOptional()
    @MinLength(6, {
        message: 'Пароль должен быть не менее 6 символов'
    })
    password?: string
}