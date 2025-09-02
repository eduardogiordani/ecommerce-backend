/* eslint-disable prettier/prettier */
import { Custumer } from "src/cases/custumers/custumer.entity";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

enum OrderStatus{
    NEW='NEW',
    SEPARATION = 'SEPARATION',
    INVOICED = 'INVOICED',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED'
}
@Entity('order')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> Custumer, {eager:true, nullable: false})
    custumer : Custumer;

    @Column('decimal', {nullable: true,precision: 10,scale:2})
    shipping : number;

    @Column('enum', {enum: OrderStatus, default: OrderStatus.NEW})
    status : OrderStatus;

    @Column('decimal',{nullable: true,precision: 10, scale:2})
    total: number;

    @CreateDateColumn()
    creatAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}