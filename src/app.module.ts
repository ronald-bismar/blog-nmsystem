import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';
import { BlogsService } from './blogs/blogs.service';

@Module({
  imports: [],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogsService],
})
export class AppModule {}
