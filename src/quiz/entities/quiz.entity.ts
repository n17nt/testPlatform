import { baseEntity } from 'src/base.entity';
import { QuizAnswer } from 'src/quiz_answers/entities/quiz_answer.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('quiz')
export class Quiz extends baseEntity {
  @Column({ type: 'varchar' })
  title: string;
  @Column({ type: 'varchar', nullable: true })
  img_url: string;
  @JoinColumn({ name: 'subject_id' })
  @ManyToOne(() => Subject, (subject) => subject.quizes, { eager: true })
  subject: number;
  @Column({ type: 'text', array: true })
  variants: string[];
  @Column('varchar')
  answer: string;
  @OneToMany(() => QuizAnswer, (quizAnswers) => quizAnswers.quiz_id)
  quizAnswers: QuizAnswer[];
}
