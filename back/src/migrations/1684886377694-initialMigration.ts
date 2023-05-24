import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684886377694 implements MigrationInterface {
    name = 'InitialMigration1684886377694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying, "telephone" character varying NOT NULL, "createdAt" TIME NOT NULL DEFAULT now(), "updatedAt" TIME NOT NULL DEFAULT now(), "clientId" uuid NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(20) NOT NULL, "lastName" character varying(20) NOT NULL, "password" character varying(120) NOT NULL, "email" character varying(40) NOT NULL, "telephone" character varying(16) NOT NULL, "createdAt" TIME NOT NULL DEFAULT now(), "updatedAt" TIME NOT NULL DEFAULT now(), "deletedAt" TIME, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
