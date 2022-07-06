import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListBotsQuery } from './dto/list-bots-query';
import { Robot } from './interfaces/robot.interface';
import { RobotEntity } from './robot.entity';

@Injectable()
export class RobotsService {
    constructor(
        @InjectRepository(RobotEntity)
        private robotsRepository: Repository<RobotEntity>,
    ) {}

    async findAll(query: ListBotsQuery): Promise<Robot[]> {
        console.log(query);

        return await this.robotsRepository.find({skip: query.skip || 0, take: query.limit || 10});
    }

    async findOne(id: number): Promise<Robot> {
        return await this.robotsRepository.findOneBy({ id });
    }

    async create(robot: Robot): Promise<Robot> {
        try {
            await this.robotsRepository.insert(robot);

            // repo insert seems to also mutate the input robot
        } catch (error) {
            console.error('Failed to insert', error);

            throw error;
        }
        
        return robot;
    }

    async update(id: number, robot: Robot): Promise<Robot> {
        try {
            await this.robotsRepository.update(id, robot);
        } catch (error) {
            console.error('Failed to update', error);

            throw error;
        }
        
        return robot;
    }

    async delete(id: number): Promise<void> {
        try {
            await this.robotsRepository.delete(id);
        } catch (error) {
            console.error('Failed to delete', error);

            throw error;
        }
    }
}
