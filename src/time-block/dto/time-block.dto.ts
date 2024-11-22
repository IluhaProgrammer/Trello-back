import { IsNumber, IsOptional, IsString } from "class-validator"

export class timeBlockDto {
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    color?: string

    @IsNumber()
    duration: number

    @IsNumber()
    @IsOptional()
    order: number
}