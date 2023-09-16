import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import './estilo.css';

const listaIcones = [perfil, sacola];

function ListaCabecalhoIcones() {
    return (
        <ul className='listaIcones'>
            {listaIcones.map((icone) => (

                <li className='icone'><img src={icone}></img></li>
             )
            )
            }
        </ul>
    );
}

export default ListaCabecalhoIcones;