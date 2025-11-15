import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './modules/blog/blog.module';
import { SectionModule } from './modules/section/section.module';

@Module({
  imports: [BlogModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "my-weak-password",
    database: "postgres",
    autoLoadEntities: true,
    synchronize: true // esto es mejor para desarrollo para no cambiar la base de datos en tiempo real
  }), SectionModule]
})
export class AppModule {}
