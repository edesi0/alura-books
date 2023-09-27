import styled from "styled-components";


const Input = styled.input`
order: 10px solid #FFF;
background: transparent;
border: 1px solid #FFF;
padding:15px 120px;
border-radius: 25px;
width: 150px;
color: white;
text-align: center;



&::placeholder{
    color: #FFF;
    text-align: center;

}
`
export default Input;