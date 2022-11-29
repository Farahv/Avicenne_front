import React from 'react';

//styles
import { makeStyles } from '@mui/styles';

export default function CustomChip(props) {
    const classes = useStyles();
    return (
        <div  className={classes.div} style={{...props, backgroundColor : props.backgroundColor}} >
            <text className={classes.text} style={{color:props.textColor}} >
                {props.children}
            </text>
        </div>
    )
}


const useStyles = makeStyles({
     div: {
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:20,
        padding:10
    },
    text:{
        fontSize:14,
        fontWeight:'bold'
    }
  });
  