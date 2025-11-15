import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { Post as PostEntity } from 'src/modules/blog/blog_entity';
import { BlogsService } from 'src/modules/blog/blogs.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogsService) { }

    @Get()
    getPosts(@Query() filterQuery): Promise<PostEntity[]> {
        const { searchTerm, orderBy } = filterQuery
        return this.blogService.getPosts();
    }

    @Get(':id')
    getPost(@Param('id') id: string): Promise<PostEntity> {
        return this.blogService.getPost(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createPost(@Body() post: CreatePostDto) {
        this.blogService.createPost(post);
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    updatePost(@Param('id') id: string, @Body() post: UpdatePostDto): Promise<PostEntity> {
        return this.blogService.updatePost(id, post);
    }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteBlog(@Param('id') id: string){
        this.blogService.deletePost(id);
    }
}