import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  subtitle: string;

  @Column()
  datePost: string;

  @Column()
  timeRead: string;

  @Column()
  imagePost: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  author: string;
}
