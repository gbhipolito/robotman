import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RobotEntity } from './robot.entity';
import { RobotsController } from './robots.controller';
import { RobotsService } from './robots.service';

@Module({
    controllers: [RobotsController],
    providers: [RobotsService],
    exports: [RobotsService],
    imports: [TypeOrmModule.forFeature([RobotEntity])],
})
export class RobotsModule {}
