import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { generateEntityId } from "@medusajs/utils";
import { BaseEntity } from "@medusajs/medusa";




@Entity()
export class Post extends BaseEntity {
  @Column({type: 'varchar'})
  title: string | null;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "post")
  }
}