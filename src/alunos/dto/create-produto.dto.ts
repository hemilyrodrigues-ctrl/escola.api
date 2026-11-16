import { IsString,IsNotEmpty,IsEmail,IsOptional } from 'class-validator'

export class CreateProdutoDto{
    @IsString()
    @IsNotEmpty ({message:"nome é obrigatorio!"})
    nome:string;

    @IsEmail({},{message:"informe uma email valido"})
    preco:string;

    @IsString()
    @IsNotEmpty({message:"matricula é obrigatoria!"})
    dataValidade:string;


}