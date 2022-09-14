import { Typography, Paper, Stack } from '@mui/material';
import React from 'react';

const PaperInformation = (props) => {
    const {userState} = props;
    const {
        public_repos,
        followers,
        following
    } = userState;
    return (
        <Paper elevation={3}>
            <Stack
            spacing={3}
            sx={{
              display: 'flex',
              flexDirection: {xs:'column', sm:'row'},
              justifyContent:'space-around',
              alignItems: {xs:'flex-start', sm:'flex-end'},
               margin:'20px'}}
            >
                <Stack>
                  <Typography variant='h5'>Repos</Typography>  
                  <Typography variant='h6'>{public_repos}</Typography>  
                </Stack>
                <Stack>
                  <Typography variant='h5'>Followers</Typography>  
                  <Typography
                   variant='h6'
                   sx={{justifyContent:'center'}}
                   >{followers}</Typography>  
                </Stack>
                <Stack>
                  <Typography variant='h5'>Following</Typography>  
                  <Typography variant='h6'>{following}</Typography>  
                </Stack>
            </Stack>

        </Paper>

    )
};

export default PaperInformation;