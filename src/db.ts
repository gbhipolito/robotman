import { TypeOrmModule } from '@nestjs/typeorm';
import { RobotEntity } from './robots/robot.entity';
import { UserEntity } from './users/user.entity';

const MysqlTypeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'robotman',
  entities: [RobotEntity, UserEntity],
  synchronize: true,
  username: 'root',
  password: 'root', // TODO hide in config / env
});

export { MysqlTypeOrmModule };
