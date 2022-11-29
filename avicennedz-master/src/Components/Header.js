import React from 'react';

//Imports
import HeaderData from './HeaderData';

//material components
import {Box, TextField} from '@mui/material';

//styles
import { makeStyles } from '@mui/styles';

export default function Header(props) {
    const classes = useStyles();
    return (
        <Box  className={classes.header} >
            {props.children}
            {props.hideheader ? null :
                <HeaderData />}
        </Box>
    )
}


const useStyles = makeStyles({
    header : {
        height : 420,
        width :  '100%',
        background: 'linear-gradient(45deg, #00B1D6 0, #005D70 100%)',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        alignContent:'flex-start',
        flexDirection:'row'
    },
    inputProps : { width:220  },
    search : {backgroundColor:'#FFF', width :240, borderRadius: 50, alignItems:'center',  },
  });
  