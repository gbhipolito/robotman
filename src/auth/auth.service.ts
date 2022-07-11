import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    let user;
    try {
      user = await this.usersService.findByUsername(username); // TODO user findUserForAuth w/c uses UserCredEntity instead
    } catch (error) {
      console.error(error);

      throw error;
    }

    const hashedPass = crypto.createHash('sha256').update(pass).digest('base64'); // TODO use argon2

    if (user?.password === hashedPass) { // TODO use safe-compare
      const { password, ...result } = user; // strip password property

      return result;
    }

    return null;
  }

  async login(user) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
