import { Repository } from "typeorm";
import { State } from "../entities/state.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StateService {
    constructor(
      @InjectRepository(State)
      private repository: Repository<State>,
    ) {}
    findAll(): Promise<State[]> {
      return this.repository.find();
    }
    findById(id: string): Promise<State | null> {
      return this.repository.findOneBy({id: id});
    }

    save(State: State): Promise<State> {
      return this.repository.save(State);      
    }

    async remove(id: string): Promise<void>{
      await this.repository.delete(id);

    }
}