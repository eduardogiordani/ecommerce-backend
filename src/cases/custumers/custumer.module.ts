import { Module} from  "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Custumer } from "./custumer.entity";
import { CustumerService } from "./custumer.service";
import { CustumerController } from "./custumer.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Custumer])],
    providers: [CustumerService],
    controllers: [CustumerController],
})
export class CustumerModule{}
