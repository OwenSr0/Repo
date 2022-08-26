import React, { useState, useEffect } from 'react';
import { Container }from '@mui/material'
import Searcher from './componets/Searcher/Index';
import { getGitHubUsers } from './services/users';
import UserCard from './containers/userCard/index'

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
    
    const [inputUser, setInputUser] = useState('octocat');
    const [userState, setUserState] = useState('inputUser');
    const [notFound, setnotFound] = useState(false);

    const gettingUser =  async (user) => {
        const userResponse = await getGitHubUsers(user)

        if(userResponse.message == 'Not Found'){
            setInputUser("octocat")
            setnotFound(true);
        } else {
            setUserState(userResponse);
        }
    }

    console.log(inputUser)
    console.log(userState)

    useEffect(() => {
        gettingUser(inputUser);
    }, [inputUser]);


    

return(
<Container sx={stackStyle}> 
    <Searcher  inputUser={inputUser} setInputUser={setInputUser}/>
    <UserCard userState={userState}/>
</Container>
    )
};

export default App;