import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';

import { Post } from './blog_entity';
import { CreatePostDto, PaginationQueryDto, UpdatePostDto } from './dto';

@Injectable()
export class BlogsService {

    constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>){  }

    async getPosts({limit, offset}: PaginationQueryDto):Promise <Post[]> {
        return await this.postRepository.find({relations: ['section'], skip: offset, take: limit});
    }

    async getPost(id: string): Promise<Post> {
        const post = await this.postRepository.findOne({where: {id}, relations: ['section']});
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

   async createPost(dto: CreatePostDto): Promise<Post> {
        const newPost: Post = {
            id: randomUUID(),
            ...dto
        }

        const postSaved = this.postRepository.create(newPost);

        return this.postRepository.save(postSaved)
    }

    async updatePost(id: string, dto: UpdatePostDto): Promise<Post> {
        const post = await this.postRepository.preload({id, ...dto}, );
       if (!post) {
    throw new NotFoundException(`Post with id ${id} not found`);
  }

  return this.postRepository.save(post);
    }

    async deletePost(id: string): Promise<void> {
        const post = await this.postRepository.findOneBy({id})
        if(!post){
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        
        this.postRepository.remove(post)
    }

}
