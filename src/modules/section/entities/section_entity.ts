import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { Post } from "../../blog/blog_entity"

@Entity()
export class Section {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    image: string

    @Column()
    subtitle: string

    @Column({ nullable: false })
    paragraph: string

    @Column({ nullable: false })
    order: number

    @ManyToOne(type => Post, post => post.section, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "postId" })
    post: Post;
}