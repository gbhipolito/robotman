import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AvatarService } from '../avatar/avatar.service';
import { Robot } from './interfaces/robot.interface';
import { RobotEntity } from './robot.entity';
import { RobotsController } from './robots.controller';
import { RobotsService } from './robots.service';

describe('RobotsController', () => {
  let controller: RobotsController;
  let service: RobotsService;

  const robot: Robot = {
    name: 'robotest',
    purpose: 'testing',
    avatar: 'airbend',
    userId: 1,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RobotsController],
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
    controller = module.get<RobotsController>(RobotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of robots', async () => {
      const result = [robot];

      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });
});
