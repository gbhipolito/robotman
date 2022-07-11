import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

const JwtRegisteredModule = JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '120s' },
});

export { JwtRegisteredModule };
