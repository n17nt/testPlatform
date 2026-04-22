import { baseEntity } from 'src/base.entity';
import { QuizAnswer } from 'src/quiz_answers/entities/quiz_answer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('quiz_history')
export class QuizHistory extends baseEntity {
  @CreateDateColumn()
  date_test: Date;
  @Column({ type: 'int' })
  duration: number;
  @Column({ type: 'int' })
  result: number;
  @Column({ type: 'int' })
  user_id: number;
  @OneToMany(() => QuizAnswer, (qA) => qA.history_id)
  quizAnswer: QuizAnswer[];
}
