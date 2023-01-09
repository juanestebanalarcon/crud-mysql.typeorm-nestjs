/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { IsNumber, MaxLength, MinLength } from 'class-validator/types/decorator/decorators';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Notes } from './note.entity';

@Entity()
export class Students extends BaseEntity{
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;
    
    @Column('varchar',{nullable:false, length:20})
    @IsString()
    @MaxLength(20)
    @MinLength(1)
    name: string;
    @Column('varchar',{nullable:false, length:20})
    @IsString()
    @MaxLength(20)
    @MinLength(1)
    lastName: string;
    @OneToMany(
    () => Notes, (notes) => notes.student, {cascade: true}
    )
    myNotes?: Notes;

}
