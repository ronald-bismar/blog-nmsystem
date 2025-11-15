import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogsService } from './blogs.service';

@Module({
    controllers: [BlogController],
    providers: [BlogsService]
})
export class BlogModule {}
