import './estilo.css';

const listaOpcoes = ['CATEGORAIS', 'FAVORITOS', 'MINHA ESTANTE'];

function listaCabecalho(){
    return (
        <ul className='opcoes'>
          {listaOpcoes.map((itemLista)=>(
            <li className='opcao'>
                <p>{itemLista}</p>
            </li>
             
          ))}
        </ul>
    );
}
export default listaCabecalho;