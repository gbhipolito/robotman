import { RobotEntity } from '../robots/robot.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 50 })
  username: string;

  @Index({ unique: true })
  @Column({ length: 250 })
  email: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column()
  password: string; // TODO move to UserCred entity

  @OneToMany((_type) => RobotEntity, (robot) => robot.user)
  robots?: RobotEntity[];
}
