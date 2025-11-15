import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Section } from '../section/entities';

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

  @OneToMany(type => Section, section => section.post)
  section: Section[];

  @Column()
  author: string;
}
