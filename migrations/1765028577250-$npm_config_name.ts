import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1765028577250 implements MigrationInterface {
    name = ' $npmConfigName1765028577250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "isDraft" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "isDraft"`);
    }

}
