import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompanyTable1683077255032 implements MigrationInterface {
    name = 'CreateCompanyTable1683077255032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL, "name" character varying(63) NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
