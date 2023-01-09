import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { StudentsModule } from './students/students.module';
/* eslint-disable prettier/prettier */

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: `mysql`,
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: "",
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadEntities: true,
  }), NotesModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
