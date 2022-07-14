import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './interfaces/user.interface';
import { UserEntity } from './user.entity';
import * as crypto from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findByUsername(username: string): Promise<User> {
    return await this.usersRepository.findOneBy({ username });
  }

  // TODO create findUserForAuth w/c gets info from UserCredEntity

  async create(user: User): Promise<User> {
    try {
      user.password = crypto
        .createHash('sha256')
        .update(user.password)
        .digest('base64'); // TODO use argon2

      await this.usersRepository.insert(user);

      // repo insert seems to also mutate the input user
    } catch (error) {
      console.error('Failed to insert', error);

      throw new BadRequestException(error.message);
    }

    const { password, ...result } = user;

    return result;
  }
}
