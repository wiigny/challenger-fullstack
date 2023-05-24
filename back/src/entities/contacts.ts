import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Client } from "./clients";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", nullable: true })
  email: string | null;

  @Column({ type: "varchar" })
  telephone: string;

  @CreateDateColumn({ type: "time" })
  createdAt: string;

  @UpdateDateColumn({ type: "time" })
  updatedAt: string;

  @ManyToOne(() => Client, (client) => client.contacts, { nullable: false })
  client: Client;
}
