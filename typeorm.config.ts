// typeorm.config.ts
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    url: configService.get<string>('DATABASE_URL'),
    entities: ['src/**/*_entity.ts'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    ssl: { rejectUnauthorized: false },
});
