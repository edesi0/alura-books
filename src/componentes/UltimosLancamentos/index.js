import styled from "styled-components";
import { Livros } from "../Pesquisa/dadosUltimosLancamentos";
import { Titulo } from "../Titulo/Index";
import React from "react";
import CardRecomenda from "../CardRecomendacao/CardRecomendacao";
import Livro2 from "../../img/livro2.png";

const Section = styled.section`
background-color: #ffffff;
border-radius: 1px;
padding: 5px 5px 5px 5px;
display: flexbox;

`
const DIV = styled.div`
text-align: center;
`

function UltimosLancamentos() {

    return (
        <Section>
            <Titulo>ULTIMOS LANCAMENTOS</Titulo>
            <DIV>
                {Livros.map(
                    livro => (
                        <>
                            <img src={livro.scr} />
                        </>
                    )
                )}
            </DIV>
            <CardRecomenda 
            titulo="Talvez vc se interesse por ..."
            subtitulo="Angular 11"
            descricao="Evolua suas aplicações com Angular" 
            img={Livro2}
           />
        </Section>

    );

}
export default UltimosLancamentos;