import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { read } from 'fs';
import { get } from 'http';
@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunoService:AlunosService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)//created-201
    create(@Body()createAlunoDto:CreateAlunoDto){
        return this.alunoService.create(createAlunoDto);
    }
    //----------------------------------------------inicio print
    @Get()
    findAll(){
        return this.alunoService.findAll()
    }
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id:string){
        return this.alunoService.remove(id);

    }
}

