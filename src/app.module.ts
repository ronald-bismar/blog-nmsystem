import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { BlogModule } from './modules/blog/blog.module';
import { SectionModule } from './modules/section/section.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    SectionModule, DatabaseModule, BlogModule]
})
export class AppModule {
  static port: number

  constructor(private readonly configService: ConfigService){
    AppModule.port = + this.configService.get('PORT');
  }
}
