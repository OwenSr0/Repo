import React, { useState, useEffect } from 'react';
import { Container }from '@mui/material'
import Searcher from './componets/Searcher/Index';
import { getGitHubUsers } from './services/users'

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

var count = 0;

const App = () => {
    
    const [inputUser, setInputUser] = useState('OwenSr0');
    const [userState, setUserState] = useState(inputUser);
    const [notFound, setNotFound] = useState(false);

    const gettingUser =  async (user) => {

        const userResponse = await getGitHubUsers(user);

        if(userState == 'OwenSr0'){
            localStorage.setItem('OwenSr0', userResponse);
        }

        if(userResponse.message == 'Not Found'){
            const { OwenSr0 } = localStorage
            setInputUser(OwenSr0)
            setNotFound(true)
        } else {
            setUserState(userResponse);
        }
        
    }
    console.log(userState)


return(
<Container sx={stackStyle}> 
    <Searcher inputUser={inputUser} setInputUser={setInputUser} gettingUser={gettingUser}/>
</Container>
    )
};

export default App;