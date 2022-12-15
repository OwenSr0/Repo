import { Typography, Stack } from '@mui/material';
import PaperInformation from '../../componets/PaperInformation';
import LocationInformation from '../../componets/LocationInformation';

import React from 'react';

const stackStyle = {
    background: 'whitesmoke',
    width: {xs:"65vw", sm: "75vw", md:"initial"},
    textAlign: 'justify'
}

const Description = (props) => {
    const { userState} = props;
    const { bio } = userState;
    return(
        <>
            <Stack sx={{justifyContent:'center'}}>
                {bio != null
                    ?<Typography variant='body1' sx={stackStyle}>{bio}</Typography>
                    :<Typography variant='body1' sx={stackStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                }
            </Stack>
            <PaperInformation userState={userState}/>
            <LocationInformation userState={userState}/>
        </>

    );
}

export default Description;