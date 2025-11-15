import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly subtitle: string;

  @IsString()
  readonly datePost: string;

  @IsString()
  readonly timeRead: string;

  @IsUrl()
  readonly imagePost: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  readonly author: string;
}
