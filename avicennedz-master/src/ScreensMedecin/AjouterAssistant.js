import React, { Component } from 'react'
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { Grid, Box, TextField, Card, Button } from '@mui/material';
import { withStyles, createStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

import Page from '../Components/Page.js';
import { MarginTwoTone } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';

const PageLayout = styled(
    Page
    , {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: 240,
            width: `calc(100% - ${240}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

class AjouterAssistant extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <PageLayout open={this.props.sideBarState}  >
                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73 }} >
                    <Grid container spacing={2} style={{ marginTop: -100 }}>
                        <Grid xs={2}></Grid>

                        <Grid item xs={8}>
                            <Card className={classes.cardHeader}>
                                <ScreenOne />
                            </Card>
                        </Grid>
                        <Grid xs={2}></Grid>
                    </Grid>


                </Box>
            </PageLayout>
        )
    }
}

function ScreenOne(props) {

    const classes = useStyles();

    return (

        <Grid container spacing={2} style={{ padding: 16 }}>
            <Grid item xs={7} style={{
                paddingLeft: 0,
                marginLeft: -10
            }}>
                <text className={classes.title}>Informations Assistant</text>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6} >
                <TextField id="outlined-basic" label="Nom" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={6} >
                <TextField id="outlined-basic" label="Prénom(s)" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={12} >
                <TextField id="outlined-basic" label="Adresse" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={6} >
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={6} >
                <TextField id="outlined-basic" label="Numéro de Téléphone" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" style={{backgroundColor:"#00789D", borderRadius:20}}>Confirmer</Button>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )

}

const mapStateToProps = state => {
    return {
        sideBarState: state.sideBarState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDrawer: () => dispatch({ type: 'TOGGLEDRAWER' })
    }
}

const useStyles = makeStyles({
    textField: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00798D",
            borderWidth: 1.5,
            boxShadow: '0 3px 5px 2px rgba(0, 121, 141, .3)',
            borderRadius: 5
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00798D"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00798D"
        }
    },
    title: {
        fontSize: 28,
        color: '#00798D',
        fontWeight: 'bold'
    },
})

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    cardHeader: {
        boxShadow: "5px 5px 15px #9E9E9E",
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 19
    },
    search: {
        backgroundColor: '#FFF',
    },
    inputProps: {
        borderWidth: 2,
        borderColor: 'red'
    },
    textField: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00798D",
            borderWidth: 1.5,
            boxShadow: '0 3px 5px 2px rgba(0, 121, 141, .3)',
            borderRadius: 5
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00798D"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00798D"
        }
    },
    title: {
        fontSize: 32,
        color: '#00798D',
        fontWeight: 'bold'
    },
    titleIcon: {
        width: 48,
        height: 48,
    },
    titleGrid: {
        paddingLeft: 0,
        marginLeft: 0
    },
    subTitle: {
        fontSize: 18,
        color: '#00798D',
        fontWeight: 'bold'
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(AjouterAssistant);