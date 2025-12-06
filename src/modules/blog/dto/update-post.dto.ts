import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Section } from '../../section/entities';

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
  @IsNotEmpty()
  readonly section?: Section[];

  @IsOptional()
  @IsString()
  readonly author?: string;

  @IsOptional()
  @IsNotEmpty()
  readonly isDraft?: boolean;
}