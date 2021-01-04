import React from 'react';

import {Grid} from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

/* Definir tipagem */
/**Function Componente */
const Layout: React.FC = () => {
  return    <Grid>
                <MainHeader/>
                <Aside />
                <Content/>
            </Grid>
}

export default Layout;
