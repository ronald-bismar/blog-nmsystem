import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Section } from 'src/modules/section/entities';

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
  readonly section: Section[];

  @IsString()
  readonly author: string;
}
