import { Grid, CardMedia } from "@mui/material";
import React from "react";

const UserCard = ({ userState: { avatar_url } }) => {
    
    return(
        <Grid
        contenedor
        >
            <Grid item xs={3}><CardMedia 
            component="img"
            alt="GitHub User"
            image={avatar_url}
            />
            </Grid>
            <Grid item xs={9}></Grid>
        </Grid>
    )
}
export default UserCard;