import { baseEntity } from 'src/base.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('subjects')
export class Subject extends baseEntity {
  @Column({ type: 'varchar' })
  title: string;
  @ManyToOne(() => Quiz, (quiz) => quiz.subject)
  quizes: Quiz[];
}
