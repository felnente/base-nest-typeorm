import { MigrationInterface, QueryRunner } from "typeorm";

export class CompanyGroupsCreateTable1682626267965 implements MigrationInterface {
    name = 'CompanyGroupsCreateTable1682626267965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(63) NOT NULL, "email" character varying(127) NOT NULL, "password" character varying(127) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company_groups" ("id" uuid NOT NULL, "name" character varying(63) NOT NULL, CONSTRAINT "PK_76d7cb05e9a438d2db15c1236b8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "company_groups"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
