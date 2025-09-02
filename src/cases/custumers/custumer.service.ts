import { Repository } from "typeorm";
import { Custumer } from "./custumer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustumerService {
    constructor(
      @InjectRepository(Custumer)
      private repository: Repository<Custumer>,
    ) {}
    findAll(): Promise<Custumer[]> {
      return this.repository.find();
    }
    findById(id: string): Promise<Custumer | null> {
      return this.repository.findOneBy({id: id});
    }

    save(Custumer: Custumer): Promise<Custumer> {
      return this.repository.save(Custumer);      
    }

    async remove(id: string): Promise<void>{
      await this.repository.delete(id);

    }
}