import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './interfaces/user.interface';
import { UserEntity } from './user.entity';

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
}
