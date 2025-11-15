import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly subtitle?: string;

  @IsOptional()
  @IsString()
  readonly datePost?: string;

  @IsOptional()
  @IsString()
  readonly timeRead?: string;

  @IsOptional()
  @IsUrl()
  readonly imagePost?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly content?: string;

  @IsOptional()
  @IsString()
  readonly author?: string;
}