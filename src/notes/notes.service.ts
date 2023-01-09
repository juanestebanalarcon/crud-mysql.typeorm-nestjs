/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { Notes } from './entities/note.entity';

@Injectable()
export class NotesService {

  constructor(
    @InjectRepository(Notes) private notesRepository: Repository<Notes>,
  ) {}

async create(createNoteDto: CreateNoteDto) {
    return  this.notesRepository.save(createNoteDto);
  }

  async findAll():Promise<Notes[]> {
    return await this.notesRepository.find();
  }

 async  findOne(id: any): Promise<Notes> {
    return await this.notesRepository.findOne(id);
  }

 async  update(id: any, updateNoteDto: Notes) {
  const editNote = await this.notesRepository.findOne(id);
  if (!editNote) {
    throw new NotFoundException('Note not found');
  }
  editNote.title = updateNoteDto.title;
  editNote.body = updateNoteDto.body;
  await editNote.save();
  return editNote;
  }

 async  remove(id: number) {
    await this.notesRepository.delete(id);
  }
}
