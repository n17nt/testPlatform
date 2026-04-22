import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { SubjectModule } from './subject/subject.module';
import { Quiz } from './quiz/entities/quiz.entity';
import { Subject } from './subject/entities/subject.entity';
import { QuizHistoryModule } from './quiz_history/quiz_history.module';
import { QuizAnswersModule } from './quiz_answers/quiz_answers.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      synchronize: true,
      entities: [Quiz, Subject, Category],
      autoLoadEntities: true,
    }),
    QuizModule,
    SubjectModule,
    QuizHistoryModule,
    QuizAnswersModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//salsddssfsd
//jhjgj
