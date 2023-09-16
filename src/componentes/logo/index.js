import logo from '../../img/logo.svg';
import './estilo.css';

function Logo() {

    return (
        <div className='logo'>

               <img className='logo-img'
                src={logo}
                alt='Logo Alura'></img>
                
           <p> <strong>Alura</strong>Books</p>
        </div>
    );

}
export default Logo;