/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { MaxLength, MinLength } from 'class-validator/types/decorator/decorators';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { isNumber } from 'util';

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
}

export class Note {

}
