import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSoftDeleteUser1682627935379 implements MigrationInterface {
    name = 'AddSoftDeleteUser1682627935379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
