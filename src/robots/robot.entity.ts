import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
