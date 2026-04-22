import { baseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends baseEntity {
  @Column({ type: 'varchar' })
  username!: string;
  @Column({ type: 'varchar' })
  email!: string;
  @Column({ type: 'varchar' })
  password!: string;
}
