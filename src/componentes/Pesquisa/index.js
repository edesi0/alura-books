import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from './dadosPesquisa'


const PesquisaContainer = styled.section`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #fff;
text-align: center;
padding: 85px 0;
height: 150px;
width: 100%;
`
const Titulo = styled.h2`
color: #fff;
font-size: 28px;
text-align: center;
width: 100%;
`
const Subtitulo = styled.h3`
font-size: 14px;
font-weight: 500;
margin-bottom: 40px;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState({});

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro</Subtitulo>
            <Input placeholder="Escreva sua próxima pesquisa"
                onBlur={evento => {

                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(
                        livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa);
                }}/>
                
            {livrosPesquisados.map(livro=>(
            <div> 
            <p>{livro.nome}</p> 
            <img src={livro.src}/>
            </div> 
            ))}
        </PesquisaContainer>

    );
}

export default Pesquisa;