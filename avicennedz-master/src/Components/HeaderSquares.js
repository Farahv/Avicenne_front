import React from 'react'

//Imports 
import { Card, Box, CardContent, Typography } from '@mui/material'

//Styling
import { makeStyles } from '@mui/styles';

export default function HeaderSquares() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.cardShadow}>
                <Box className={classes.box}></Box>
                <CardContent className={classes.cardBody} >
                       <text className={classes.kpiStyle} >CONSULTATIONS</text> <br></br>
                       <text className={classes.kpi2Style}>2600</text>
                </CardContent>
            </Card>
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        width: 215,
        height: 140
    },
    cardShadow: {
        boxShadow: "3px 3px 10px #808080"
    },
    box: {
        height: 88,
        width: 96,
        position: 'absolute',
        marginLeft: 16,
        marginTop: -50,
        borderRadius: 5,
        backgroundColor: "#E1F9FF",
        boxShadow: "3px 3px 10px #808080",
        
    },
    cardBody: {
        marginTop: 24,
        paddingBottom: 4,
        alignContent:'flex-start',
    },
    kpiStyle:{
        fontSize:20,
        color:'#00789D',
        fontWeight:'bold',
        textAlign:'left'
    },
    kpi2Style:{
        fontSize:20,
        color:'#37D431',
        fontWeight:'bold',
        textAlign:'left',
    }



});