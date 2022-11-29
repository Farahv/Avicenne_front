import React from 'react';

//material components
import {Box, TextField} from '@mui/material';

//styles
import { makeStyles } from '@mui/styles';

export default function Header(props) {
    const classes = useStyles();
    return (
        <Box  className={classes.header} >
            {props.children}
        </Box>
    )
}


const useStyles = makeStyles({
    header : {
        height : '100%',
        width:'100%'
    },
  });
  