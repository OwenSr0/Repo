import { Grid, CardMedia, Stack } from "@mui/material";
import PrincipalInfo from '../../componets/PrincipalInfo/index'
import Description from "../Description";
import React from "react";

const gridStyle = {
    marginTop:'15px',
    flexDirection: 'column'

}

const UserCard = (props) => {
    const { userState } = props;
    const { avatar_url } = userState;
    
    return(
        <Grid
        container
        spacing={2}
        sx={gridStyle}
        >
            <Grid item xs={3}>
                <CardMedia 
            component="img"
            alt="GitHub User"
            image={avatar_url}
            sx={{
                width:{xs:'40vw', md:'100%'},
                borderRadius:'50%',
                marginLeft:{xs:'80px', md:'0'}
            }}
            />
            </Grid>
            <Grid item xs={9}>
                <Stack
                direction='column'
                spacing={1}
                sx={{margin:'30px'}}
                >
                    <PrincipalInfo userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    )
}
export default UserCard;