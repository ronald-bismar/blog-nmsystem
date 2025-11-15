import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Section } from './entities';

@Module({
    imports: [TypeOrmModule.forFeature([Section])]
})
export class SectionModule {}
