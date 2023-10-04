import styled from "styled-components";
import { Titulo } from "../Titulo/Index";

const ImgLivro = styled.img`
width: 150px;
`

const Card = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 auto;
    max-width: 500px;
    padding: 25px 20px;
    width: 100%;
    display: list-item;
    justify-content: center;
    align-items: center;
 
  
    `

const Botao = styled.button`
background-color: #EB9B00;
color: #FFF;
padding: 10px 0px;
font-size: 16px;
border: none;
font-weight: 900;
display: block;
text-align: center;
width: 150px;
&:hover {
    cursor: pointer;
}`

const Descricao = styled.p`
max-width: 300px;`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0;
    `

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
    return (
        <Card>
          
            <Titulo>{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
            <ImgLivro src={img} />
            
           
            <Botao>Saib mais</Botao>
           

        </Card>

    );

}
export default CardRecomenda;