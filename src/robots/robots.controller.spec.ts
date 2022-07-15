import { BadRequestException } from '@nestjs/common';
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
    const result = [robot];

    it('should call robots service', async () => {
      const mockService = jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      await controller.findAll()

      expect(mockService).toHaveBeenCalled();
    });


    it('should return an array of robots', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    const result = robot;

    const req = {
      user: {
        id: 1,
      }
    };

    const body = {
      name: 'robotest',
      purpose: 'testing',
      avatar: 'airbend',
      id: 2,
    };

    it('should call robots service with id of logged in user', async () => {
      const expectedServiceBody = {
        name: 'robotest',
        purpose: 'testing',
        avatar: 'airbend',
        userId: 1,
      };

      const mockService = jest.spyOn(service, 'create').mockImplementation(async () => result);

      await controller.create(req, body)

      expect(mockService).toHaveBeenCalledWith(expectedServiceBody);
    });

    it('should return created robot', async () => {
      jest.spyOn(service, 'create').mockImplementation(async () => result);

      expect(await controller.create(req, body)).toBe(result);
    });

    it('should throw when service throws error', async () => {
      const error = new BadRequestException('testing');

      jest.spyOn(service, 'create').mockImplementation(async () => {throw error});

      await expect(async () => {await controller.create(req, body)}).rejects.toThrow(error);
    });
  });
});
