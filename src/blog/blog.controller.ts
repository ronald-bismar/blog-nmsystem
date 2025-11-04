import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { Post as PostEntity } from 'src/blogs/blog_entity';
import { BlogsService } from 'src/blogs/blogs.service';

@Controller('blogs')
export class BlogController {
    constructor(private readonly blogService: BlogsService) { }

    @Get()
    getPosts(@Query() filterQuery): PostEntity[] {
        const { searchTerm, orderBy } = filterQuery
        return this.blogService.getPosts();
    }

    @Get(':id')
    getPost(@Param('id') id: string): PostEntity {
        return this.blogService.getPost(id);
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createBlog(@Body() post: PostEntity) {
        this.blogService.createPost(post);
    }
    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    updateBlog(@Param('id') id: string, @Body() post: PostEntity): PostEntity {
        return this.blogService.updatePost(id, post);
    }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteBlog(@Param('id') id: string) {
        this.blogService.deletePost(id);
    }
}