import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AvatarService } from '../avatar/avatar.service';
import { Repository } from 'typeorm';
import { Robot } from './interfaces/robot.interface';
import { RobotEntity } from './robot.entity';
import { RobotsService } from './robots.service';

describe('RobotsService', () => {
  let service: RobotsService;
  let robotEntityRepository: Repository<RobotEntity>;

  const robot: Robot = {
    name: 'robotest',
    purpose: 'testing',
    avatar: 'airbend',
    userId: 1,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RobotsService,
        AvatarService,
        {
          provide: getRepositoryToken(RobotEntity),
          useValue: {
            findAll: jest.fn().mockResolvedValue([robot]),
          },
        },
      ],
    }).compile();

    service = module.get<RobotsService>(RobotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
