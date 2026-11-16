import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { randomUUID } from 'crypto';
import { produtos } from '../alunos/entities/produto.entity.js';
import { CreateProdutoDto } from '../alunos/dto/create-produto.dto.js';


@Injectable()
export class ProdutoService {
    private produto: produtos[]=[]
    //criar
    create(createProdutoDto: CreateProdutoDto):produtos{
        const matriculaExistente=this.produto.find(
            (a)=>a.matricula===createProdutoDto.matricula
        )
        if(matriculaExistente){
            throw new ConflictException("Este produto ja foi cadastrado")
        }
        const novoProduto:produtos={
            id:randomUUID(),
            ...createProdutoDto,
            criadoEm: new Date()
        }
        this.produto.push(novoProduto)
        return novoProduto
    }

    //ler todos 
    findAll():produtos[]{
        return this.produto;
    }

    //apagar
    remove(id:string):{message:string}{
        const index=this.produto.findIndex((a)=>a.id===id);
        if (index===-1){
            throw new NotFoundException("produto não encontrado")
        }
        this.produto.splice(index,1)
        return {message:`produto com id ${id} foi removido com sucesso`}
    }

}
