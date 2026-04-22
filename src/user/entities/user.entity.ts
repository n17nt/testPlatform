import { baseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends baseEntity {
  @Column({ type: 'varchar', unique: true })
  username!: string;
  @Column({ type: 'varchar', unique: true })
  email!: string;
  @Column({ type: 'varchar' })
  password!: string;
}
