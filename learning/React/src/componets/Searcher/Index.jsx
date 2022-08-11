import React from 'react'
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
    order: '1'
}

const Searcher = (props) => {

    var {
        inputUser,
        setInputUser
    } = props;

    const handleClick = () => {
        console.log(inputUser)
    }

    return(
    <Stack
    directions= 'row'
    sx={stackStyle}
    >
        <TextField
        id='outlined-basic'
        label='GitHub User'
        placeholder='OwenSr0'
        variant='outlined'
        size='small'
        sx={textFieldStyle}
					onChange={e => setInputUser(e.target.value)}
					InputProps={{
					startAdornment: (
						<InputAdornment position="start" sx={iconSearchStyle}>
							<IconButton  onClick={()=> handleClick(setInputUser, inputUser)}>
								<SearchIcon/>
							</IconButton>
						</InputAdornment>
					)}}
		/>
    </Stack>
    )
}

export default Searcher;