import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationsCompanyTogroups1683077482064 implements MigrationInterface {
    name = 'RelationsCompanyTogroups1683077482064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" ADD "companyGroupId" uuid`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_008ac1565dfbabb9731524f3d9e" FOREIGN KEY ("companyGroupId") REFERENCES "company_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_008ac1565dfbabb9731524f3d9e"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "companyGroupId"`);
    }

}
