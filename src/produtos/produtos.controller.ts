import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ProdutoService } from './produtos.service.js';
import { CreateProdutoDto } from '../alunos/dto/create-produto.dto.js';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtoService:ProdutoService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)//created-201
    create(@Body()createAlunoDto:CreateProdutoDto){
        return this.produtoService.create(CreateProdutoDto);
    }
    //----------------------------------------------inicio print
    @Get()
    findAll(){
        return this.produtoService.findAll()
    }
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id:string){
        return this.produtoService.remove(id);

    }
}