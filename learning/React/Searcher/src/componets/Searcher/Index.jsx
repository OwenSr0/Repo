import React, { useState } from 'react'
import { IconButton, Stack, TextField, Typography} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';



const stackStyle = {
    flexDirection: 'row',
    marginTop: '30px',
    paddingTop: {xs: '20px'},
    paddingLeft: {xs: '20px'},
    width: {xs: '100%', md:'80%'}
}

const textFieldStyle = {
    width: '90%'
}

const iconSearchStyle = {
    left:'-45px'
}

const Searcher = (props) => {

    const {
        inputUser,
        setInputUser,
        notFound
    } = props;

    const [tempValue, setTempValue] = useState('');

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setTempValue(inputValue);
    }

    const handleSubmit = () => {
        setInputUser(tempValue);
    }

    const Found = () => {
        return
    }

    return(
    <Stack
    directions= 'row'
    sx={stackStyle}
    >
            {
                    notFound ?
                    (
                        <TextField
                            error
                            id="outlined-error"
                            label="Error"
                            placeholder="Introduce a valid username"
                            variant="outlined"
                            size="small"
                            value={tempValue}
                            onChange={onSearchValueChange}
                            sx={{
                                width: '90%',
                            }}
                        />
                    ) : (
                        <TextField
                            id="outlined-basic"
                            label="User of Github"
                            placeholder="Search"
                            variant="outlined"
                            size="small"
                            value={tempValue}
                            onChange={onSearchValueChange}
                            sx={{
                                width: '90%',
                            }}
                        />
                    )
            }
        <IconButton 
        sx={iconSearchStyle}
        onClick={handleSubmit}
        >
            <SearchIcon/>
        </IconButton>
        
    </Stack>
    )
}

export default Searcher;


/*
<IconButton  onClick={()=> handleClick(tempValue, setInputUser)}></IconButton>
onChange={e => setTempValue(e.target.value)} */

