/* eslint-disable prettier/prettier */
import {Entity} from "typeorm";

@Entity()
export class Category {
    id: string;
    name: string;
}