import styled from "styled-components";
import { Livros } from "../Pesquisa/dadosUltimosLancamentos";
import livroImg from '../../img/livro.png';
import React from "react";

const Section = styled.section`
background-color: #EBECEE;
border-radius: 1px;
padding: 5px 5px 5px 5px;
display: flexbox;
`
const P = styled.p`
font-family: Roboto;
`

function UltimosLancamentos() {

    return (
        <Section>

            <h3>Ultimos Lançamentos</h3>
            {Livros.map(
                livro => (
                    <React.Fragment>
                        <P>{livro.nome}</P>
                        <img src={livro.scr}/>
                    </React.Fragment>
                )
            )}
        </Section>
    );

}
export default UltimosLancamentos;