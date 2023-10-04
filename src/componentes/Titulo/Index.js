
import styled from "styled-components";

export const Titulo = styled.h3`
font-family: Tahoma;
text-align: center;
color:${props=>props.cor || 'burlywood'};
width:100% ;
font-size: ${props=>props.size || '18px'};
`