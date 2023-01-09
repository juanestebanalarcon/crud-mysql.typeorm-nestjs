/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { MaxLength, MinLength } from 'class-validator/types/decorator/decorators';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import { Students } from './student.entity';

@Entity()
export class Notes extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{length: 100, unique: false, nullable: false})
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    title : string;
    @Column('varchar',{length: 100, unique: false, nullable: false})
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    body : string;
    @Column('integer',{unique: false, nullable: false})
    numPages : number;
    @ManyToOne(
        () => Students, (student) => student.myNotes
    )
    student?: Students;
}

export class Note {

}
