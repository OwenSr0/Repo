import React, { useState} from 'react';
import { Container }from '@mui/material'
import Searcher from './componets/Searcher/Index';

const stackStyle = {
    background: 'whitesmoke',
    width: '80vw',
    height: '500px',
    borderRadius: '16px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const App = () => {
    
    const [inputUser, setInputUser] = useState('OwenSr0');

return(
<Container sx={stackStyle}> 
    <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
</Container>
    )
};

export default App;