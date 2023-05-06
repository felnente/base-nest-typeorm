import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCompany1683412753059 implements MigrationInterface {
    name = 'AddColumnCompany1683412753059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_4c13ef036214ae07c30cda22b7c"`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "company_group_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_4c13ef036214ae07c30cda22b7c" FOREIGN KEY ("company_group_id") REFERENCES "company_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_4c13ef036214ae07c30cda22b7c"`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "companies" ALTER COLUMN "company_group_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_4c13ef036214ae07c30cda22b7c" FOREIGN KEY ("company_group_id") REFERENCES "company_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
