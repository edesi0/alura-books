import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #fff;
text-align: center;
padding: 85px 0;
height: 270px;
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
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro</Subtitulo>
            <Input placeholder="Digite sua pesquisa"/>
        </PesquisaContainer>
    );
}

export default Pesquisa;