import React from 'react';
import Routes from './routes';


import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard';
import Layout from './components/Layout';
import dark from './styles/themes/dark';

//const App: React.FC = () => <Routes />;

const App: React.FC = () =>{
  return(
    <ThemeProvider theme={ dark }>
      <GlobalStyles/>
      <Layout />
    </ThemeProvider>
  )
}
export default App;


