import { Injectable } from '@nestjs/common';
import { ListBotsQuery } from './dto/list-bots-query';
import { Robot } from './interfaces/robot.interface';

@Injectable()
export class RobotsService {
    private readonly robots: Robot[] = [];

    create(robot: Robot): Robot {
        this.robots.push(robot);

        return robot;
    }

    findAll(query: ListBotsQuery): Robot[] {
        console.log(query);
        
        return this.robots;
    }
}
