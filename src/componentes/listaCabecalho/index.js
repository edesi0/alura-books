
import './estilo.css';

const itemsLista = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];
function ListaItems() {

    return (
        <div className='contentLista'>     
            <ul className='lista'>
              { itemsLista.map(
                (item)=>(
                  <li className='itemLista'>{item}</li>  
                )
              )}
            </ul>
            
        </div>
    );

}
export default ListaItems;