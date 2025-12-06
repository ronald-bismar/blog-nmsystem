import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    limit: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset: number

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    isDraft?: boolean;
}