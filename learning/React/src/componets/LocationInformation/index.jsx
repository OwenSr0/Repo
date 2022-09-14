import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';
import React from 'react';
import { Grid, Typography, Stack } from '@mui/material'

const LocationInformation = (props) => {
    const {userState} = props;
    const {
        location,
        twitter_username,
        blog,
        company
    } = userState;
    return (
        <Grid 
        container
        spacing={2}
        sx={{
            marginTop:'15px',
            flexDirection:{xs:'column', sm:'row'}
        }}>
            <Grid item xs={6}>
                <Stack
                direction='row'
                spacing='2'
                >
                    <LocationOnIcon></LocationOnIcon>
                        {location != null
                            ?<Typography>{location}</Typography>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>
            <Grid item xs={6 }>
                <Stack
                direction='row'
                spacing='2'
                >
                    <TwitterIcon></TwitterIcon>
                        {twitter_username != null
                            ?<Typography>@{twitter_username}</Typography>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack
                direction='row'
                spacing='2'
                >
                    <LanguageIcon></LanguageIcon>
                        {blog != ''
                            ?<a target='_blank' href={blog}><Typography>{blog}</Typography></a>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack
                direction='row'
                spacing='2'
                >
                    <BusinessIcon></BusinessIcon>
                        {company != null
                            ?<Typography>{company}</Typography>
                            :<Typography>Not Available</Typography>
                        }
                </Stack>
            </Grid>


        </Grid>

    )
};

export default LocationInformation;