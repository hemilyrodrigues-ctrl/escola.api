import { IsString,IsNotEmpty,IsEmail,IsOptional } from 'class-validator'

export class CreateAlunoDto{
    @IsString()
    @IsNotEmpty ({message:"nome é obrigatorio!"})
    nome:string;

    @IsEmail({},{message:"informe uma email valido"})
    email:string;

    @IsString()
    @IsNotEmpty({message:"matricula é obrigatoria!"})
    matricula:string;

    @IsString()
    @IsOptional()
    dataNascimento?:string;
}