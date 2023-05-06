import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameRelationsCompanytoGroups1683078067885 implements MigrationInterface {
    name = 'RenameRelationsCompanytoGroups1683078067885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_008ac1565dfbabb9731524f3d9e"`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME COLUMN "companyGroupId" TO "company_group_id"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_4c13ef036214ae07c30cda22b7c" FOREIGN KEY ("company_group_id") REFERENCES "company_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_4c13ef036214ae07c30cda22b7c"`);
        await queryRunner.query(`ALTER TABLE "companies" RENAME COLUMN "company_group_id" TO "companyGroupId"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_008ac1565dfbabb9731524f3d9e" FOREIGN KEY ("companyGroupId") REFERENCES "company_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
