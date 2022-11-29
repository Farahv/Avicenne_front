import React from 'react'

//Imports
import HeaderSquares from './HeaderSquares';

//MUI Components 
import { Grid } from '@mui/material'

export default function HeaderData() {
    const color = "light"
    return (
        <Grid container spacing={8} justifyContent="center" alignItems="center" style={{marginTop:0}}>
        <Grid item xs={2.8}>
            <HeaderSquares />
        </Grid>
        <Grid item xs={2.8}>
            <HeaderSquares />
        </Grid>
        <Grid item xs={2.8}>
            <HeaderSquares />
        </Grid>
        <Grid item xs={2.8}>
            <HeaderSquares />
        </Grid>
      </Grid>
    )
}

