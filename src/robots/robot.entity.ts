import { UserEntity } from 'src/users/user.entity';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('robot')
export class RobotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  name: string;

  @Column()
  purpose: string;

  @Column({ nullable: true })
  avatar?: string;

  @ManyToOne((_type) => UserEntity, (user) => user.robots)
  user: UserEntity;
}
