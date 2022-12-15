import React, { useState, useEffect } from 'react';
import { Container }from '@mui/material'
import Searcher from './componets/Searcher/Index';
import { getGitHubUsers } from './services/users';
import UserCard from './containers/userCard/index'

const stackStyle = {
        background: 'whitesmoke',
        width: {xs:"90vw", md: "80vw"},
        height: {xs:"100%", md: "60vh", lg:"600px"},
        borderRadius: '16px',
        marginTop: {xs:"15px", md: "30px", lg:"40px"},
        display: {xs:"block", md:"flex"},
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"}
    }

const App = () => {
    
    const [inputUser, setInputUser] = useState('octocat');
    const [userState, setUserState] = useState('inputUser');
    const [notFound, setNotFound] = useState(false);

    const gettingUser =  async (user) => {
        const userResponse = await getGitHubUsers(user)

        if(userResponse.message === 'Not Found'){
            setInputUser("octocat")
            setNotFound(true); 
        } else {
            setUserState(userResponse);
        }
    }

    useEffect(() => {
        gettingUser(inputUser);
    }, [inputUser]);

return(
<Container sx={stackStyle}> 
    <Searcher  inputUser={inputUser} setInputUser={setInputUser} notFound={notFound}/>
    <UserCard userState={userState}/>
</Container>
    )
};

export default App;