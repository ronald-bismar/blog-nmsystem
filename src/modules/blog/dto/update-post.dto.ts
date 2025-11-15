import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Section } from 'src/modules/section/entities';

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
  readonly content?: Section[];

  @IsOptional()
  @IsString()
  readonly author?: string;
}