import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsUser1683253307827 implements MigrationInterface {
    name = 'AddRelationsUser1683253307827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "company_group_id" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b83ec81e035a968f75b9c869358" FOREIGN KEY ("company_group_id") REFERENCES "company_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b83ec81e035a968f75b9c869358"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "company_group_id"`);
    }

}
