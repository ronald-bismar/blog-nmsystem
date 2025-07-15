import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { BlogsService } from 'src/blogs/blogs.service';

@Controller('blogs')
export class BlogController {

    constructor(private readonly blogService: BlogsService){}
    
    @Get()
    getPosts(@Query() filterQuery):string{
        const {searchTerm, orderBy} = filterQuery
        return 'Hello from Blogs'
    }

    @Get(':id')    
    getPost(@Param('id') id: string):string{
        return `Your post is ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createBlog(@Body('message') message:string){
        return `Your blog is ${message}`;
    }
}