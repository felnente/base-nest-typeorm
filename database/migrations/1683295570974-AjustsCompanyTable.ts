import { MigrationInterface, QueryRunner } from "typeorm";

export class AjustsCompanyTable1683295570974 implements MigrationInterface {
    name = 'AjustsCompanyTable1683295570974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "created_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "updated_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "created_at"`);
    }

}
