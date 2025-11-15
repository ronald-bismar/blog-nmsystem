import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { Post } from './blog_entity';
import { BlogsService } from './blogs.service';

@Module({
    imports: [
    TypeOrmModule.forFeature([Post]) 
  ],
    controllers: [BlogController],
    providers: [BlogsService]
})
export class BlogModule {}
