import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvatarService } from '../avatar/avatar.service';
import { Repository } from 'typeorm';
import { ListBotsQuery } from './dto/list-bots-query';
import { Robot } from './interfaces/robot.interface';
import { RobotEntity } from './robot.entity';

@Injectable()
export class RobotsService {
  constructor(
    @InjectRepository(RobotEntity)
    private robotsRepository: Repository<RobotEntity>,
    private avatarService: AvatarService,
  ) {}

  async findAll(query: ListBotsQuery = {}): Promise<Robot[]> {
    console.log(query);

    return await this.robotsRepository.find({
      skip: query.skip || 0,
      take: query.limit || 10,
      relations: ['user'], // TODO exclude user password
    });
  }

  async findOne(id: number): Promise<Robot> {
    return await this.robotsRepository.findOneBy({ id });
  }

  async create(robot: Robot): Promise<Robot> {
    try {
      if (!robot.avatar) {
        robot.avatar = this.avatarService.getRandom();
      }

      await this.robotsRepository.insert(robot);

      // repo insert seems to also mutate the input robot
    } catch (error) {
      console.error('Failed to insert', error);

      throw new BadRequestException(error.message);
    }

    return robot;
  }

  async update(id: number, robot: Robot): Promise<Robot> {
    try {
      await this.robotsRepository.update(id, robot);
    } catch (error) {
      console.error('Failed to update', error);

      throw new BadRequestException(error.message);
    }

    return robot;
  }

  async delete(id: number): Promise<void> {
    try {
      await this.robotsRepository.delete(id);
    } catch (error) {
      console.error('Failed to delete', error);

      throw new BadRequestException(error.message);
    }
  }
}
