import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import './estilo.css';
import styled from 'styled-components';

const Icone = styled.li`
min-width: 50px; 
align-items: center;
width: 20px;
`

const listaIcones = [perfil, sacola];

function ListaCabecalhoIcones() {
    return (
        <ul className='listaIcones'>
            {listaIcones.map((icone) => (

                <Icone><img src={icone}></img></Icone>
               )
              )
            }
        </ul>
    );
}

export default ListaCabecalhoIcones;