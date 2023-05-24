import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contact } from "./contacts";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20 })
  firstName: string;

  @Column({ type: "varchar", length: 20 })
  lastName: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 40, unique: true })
  email: string;

  @Column({ type: "varchar", length: 16 })
  telephone: string;

  @CreateDateColumn({ type: "time" })
  createdAt: string;

  @UpdateDateColumn({ type: "time" })
  updatedAt: string;

  @DeleteDateColumn({ type: "time" })
  deletedAt: string;

  @OneToMany(() => Contact, (contact) => contact.client, { nullable: true })
  contacts: Contact | null;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
