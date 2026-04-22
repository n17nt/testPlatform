import { baseEntity } from 'src/base.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('categories')
export class Category extends baseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  slug: string;

  @OneToMany(() => Subject, (subject) => subject.category)
  subjects: Subject[];
}
