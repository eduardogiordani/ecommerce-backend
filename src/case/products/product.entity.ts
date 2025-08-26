import { Category } from "src/case/categories/category.entity";
import { Brand } from "../brands/brand.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
@Entity('product')
export class Product{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 60, nullable: false })
    name: string;

    @Column('text',{nullable: true })
    descripction: string;

    @Column('decimal',{nullable: false, precision: 10, scale: 2 })
    price: number;

    @Column('boolean', {nullable: false, default: true })
    active: boolean;

    @ManyToOne(() => Category,{eager: false, nullable: false})
    category: Category;

    @ManyToOne(() => Brand,{eager: false, nullable: true})
    brand: Brand
}
