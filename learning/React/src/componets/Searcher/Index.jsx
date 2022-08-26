import React, { useState } from 'react'
import { IconButton, Stack, TextField, InputAdornment} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';



const stackStyle = {
    flexDirection: 'row',
    marginTop: '30px',
    width: '80%'
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
        setInputUser
    } = props;

    const [tempValue, setTempValue] = useState('');

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setTempValue(inputValue);
    }

    const handleSubmit = () => {
        setInputUser(tempValue);
    }

    return(
    <Stack
    directions= 'row'
    sx={stackStyle}
    >
        <TextField
        id='outlined-basic'
        label='GitHub User'
        placeholder='octocat'
        variant='outlined'
        size='small'
        value={tempValue}
        onChange={onSearchValueChange}
        sx={textFieldStyle}
        />
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