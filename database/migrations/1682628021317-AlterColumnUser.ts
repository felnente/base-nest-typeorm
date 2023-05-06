import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumnUser1682628021317 implements MigrationInterface {
    name = 'AlterColumnUser1682628021317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deletedAt" TO "deleted_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "deleted_at" TO "deletedAt"`);
    }

}
