import { Post } from "src/modules/blog/blog_entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Section{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    image: string

    @Column()
    subtitle:string

    @Column({nullable: false})
    paragraph:string

    @Column({nullable: false})
    order: number

    @ManyToOne(type => Post, post => post.section, {cascade: true})
    @JoinColumn({name: "postId"})
    post: Post;
}