import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { City } from "../cities/entities/city.entity";
@Entity('custumer')
export class Custumer{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 60, nullable: false })
    name: string;

    @Column({ length: 250, nullable: true })
    address: string;
    
    @Column({ length: 8, nullable: true })
    zipcode: string;

    @ManyToOne(() => City, {eager: true, nullable: true})
    cityid: string;

}
