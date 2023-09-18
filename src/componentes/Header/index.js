import Logo from '../Logo/index.js';
import ListaItems from '../ListaCabecalho/index.js';
import ListaIcones from '../ListaCabecalhoIcones/index.js';
import HeaderStyled from './styled.js';

import React from 'react';

function Header() {
    return (
        <header>
         <Logo/> 
         <ListaItems/>
         <ListaIcones/>
        </header>
    );
}

export default Header;