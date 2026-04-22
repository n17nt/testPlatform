import { baseEntity } from 'src/base.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { QuizHistory } from 'src/quiz_history/entities/quiz_history.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class QuizAnswer extends baseEntity {
  @JoinColumn()
  @ManyToOne(() => Quiz, (quiz) => quiz.quizAnswers)
  quiz_id: number;
  @Column({ type: 'varchar' })
  answer: string;
  @Column({ type: 'boolean' })
  is_true: boolean;
  @ManyToOne(() => QuizHistory, (qH) => qH.quizAnswer)
  history_id: number;
}
