import styled from "styled-components";
import { Livros } from "../Pesquisa/dadosUltimosLancamentos";
import { Titulo } from "../Titulo/Index";
import React from "react";
import { Carousel } from 'rsuite';

const Section = styled.section`
background-color: #ffffff;
border-radius: 1px;
padding: 5px 5px 5px 5px;
display: flexbox;
background-color: white;
`
const DIV = styled.div`
text-align: center;
`

function UltimosLancamentos() {

    return (
        <Section>
        <Titulo>ULTIMOS LANCAMENTOS</Titulo>
            <Carousel autoplay>
             
                <DIV>
                    {Livros.map(
                    livro => (
                        <>
                            <img src={livro.scr} />
                        </>
                    )
                )}
                </DIV>
            </Carousel>
        </Section>
    );

}
export default UltimosLancamentos;