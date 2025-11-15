import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Post } from './blog_entity';
import { CreatePostDto, UpdatePostDto } from './dto';

@Injectable()
export class BlogsService {
    private blogs: Post[] = [
        {
            id: '1',
            title: '¿Qué son las bases de datos NoSQL y por qué incluso el creador de SQL las apoya?',
            subtitle: 'El creador de SQL, Donald Chamberlin, ha dado su respaldo a las bases de datos NoSQL, una categoría diversa de bases de datos que ha surgido en los últimos años y que se separa de su propia creación exitosa.',
            datePost: '2024-01-20',
            timeRead: '6 min',
            imagePost: 'https://nextmacrosystem.net/images-post/database-sql-with-logo.webp',
            content: 'En este artículo, exploramos el concepto de bases de datos NoSQL y su relación con el lenguaje de consulta SQL. El creador de SQL, Donald Chamberlin, ha dicho que las bases de datos NoSQL son una "respuesta" a las limitaciones de las bases de datos relacionales y ha dado su apoyo a esta nueva categoría de bases de datos. A lo largo del artículo, discutiremos por qué las bases de datos NoSQL son útiles y por qué deberían considerarse una opción viable para ciertos proyectos.',
            author: 'Ronald Bismar',
        },
    ];

    getPosts(): Post[] {
        return this.blogs;
    }

    getPost(id: string): Post {
        const post = this.blogs.find((blog) => blog.id === id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    createPost(dto: CreatePostDto): Post {
        const newPost: Post = {
            id: randomUUID(),
            ...dto
        }
        this.blogs.push(newPost);
        return newPost
    }

    updatePost(id: string, dto: UpdatePostDto): Post {
        const post = this.getPost(id);
        Object.assign(post, dto);
        return post;
    }

    deletePost(id: string): void {
        const index = this.blogs.findIndex((blog) => blog.id === id);
        if(index === -1){
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        
        this.blogs.splice(index, 1);
    }

}
