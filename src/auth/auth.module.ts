import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { BasicStrategy } from './auth-basic.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtRegisteredModule } from './jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule, UsersModule, JwtRegisteredModule],
  providers: [AuthService, BasicStrategy, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
