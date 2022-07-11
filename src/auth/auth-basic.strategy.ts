// TODO move to strategies dir

import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

const USERNAME = 'man'; // TODO encrypt & env/config
const PASSWORD = 'robot'; // TODO encrypt & env/config

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      passReqToCallback: true,
    });
  }

  public validate = async (
    _req: object,
    username: string,
    password: string,
  ): Promise<boolean> => {
    if (USERNAME === username && PASSWORD === password) {
      // TODO use safe-compare
      return true;
    }

    throw new UnauthorizedException();
  };
}
