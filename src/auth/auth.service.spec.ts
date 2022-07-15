import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AvatarService } from '../avatar/avatar.service';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/user.entity';
import { User } from '../users/interfaces/user.interface';

import * as crypto from 'crypto';
import { NotFoundException } from '@nestjs/common';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  const userEntity: UserEntity = {
    id: 1,
    username: 'akoito',
    email: 'ako@ito.com',
    firstName: 'ako',
    lastName: 'ito',
    password: 'akopadin',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findAll: jest.fn().mockResolvedValue([userEntity]),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('validateUser', () => {
    const pass = 'Akopadin';

    const hashedPass = crypto
      .createHash('sha256')
      .update(pass)
      .digest('base64');

    const dbUser: User = {
      id: 1,
      username: 'ako',
      email: 'ako@ito.com',
      firstName: 'ako',
      lastName: 'ito',
      password: hashedPass,
    };

    const usersHash = {
      ako: dbUser,
    };

    it('should call users service', async () => {

      const mockService = jest.spyOn(usersService, 'findByUsername').mockImplementation(async (username) => usersHash[username]);

      await authService.validateUser('ako', pass);

      expect(mockService).toHaveBeenCalled();
    });

    it('should return user w/o password', async () => {
      const result: User = {
        id: 1,
        username: 'ako',
        email: 'ako@ito.com',
        firstName: 'ako',
        lastName: 'ito',
      };

      jest.spyOn(usersService, 'findByUsername').mockImplementation(async (username) => usersHash[username]);


      expect(await authService.validateUser('ako', pass)).toStrictEqual(result);
    });

    it('should return null if invalid password', async () => {
      jest.spyOn(usersService, 'findByUsername').mockImplementation(async (username) => usersHash[username]);

      expect(await authService.validateUser('ako', 'wrong pass')).toBe(null);
    });

    it('should throw not found exception if username not found', async () => {
      jest.spyOn(usersService, 'findByUsername').mockImplementation(async () => undefined);

      expect(async () => {await authService.validateUser('ako', pass)}).rejects.toThrow(new NotFoundException('ako not found'))
    });
  });
});
