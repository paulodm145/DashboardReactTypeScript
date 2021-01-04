import React from 'react';

import { Button } from '@material-ui/core';

/** Definir tipagem */
/** React.FC - Function Componente */
const Repository: React.FC = () => {
  return  <Button onClick={()=>{alert('teste')}} color="primary">Repo</Button>;
}

export default Repository;