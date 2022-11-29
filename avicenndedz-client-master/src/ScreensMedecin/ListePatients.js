import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { styled } from '@mui/material/styles';

import { Link } from "react-router-dom";

//Components Imports
import Page from '../Components/Page.js';
import Chip from '../Components/Chip.js'


import {
    Grid,
    Box,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Paper,
    Modal,
    TextField,
    Avatar,
    Button,
    IconButton
} from '@mui/material'
import { withStyles } from '@mui/styles'

import AlarmIcon from '@mui/icons-material/Alarm';
import SendIcon from '@mui/icons-material/Send';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';


//Data created for test TO REMOVE AFTER
function createData(name, calories, fat, carbs, protein, variable) {
    return { name, calories, fat, carbs, protein, variable };
}


//End Data


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


class MedicalDoc extends React.Component {

    

    render() {


        const { classes } = this.props;


        const rows = [
            createData('FERDJANI Ghada', 'gg_ferdjani@esi.dz', '26-06-2021', 'Example', <Button variant="contained" style={{ borderRadius: 50, backgroundColor: '#4CAF50' }} endIcon={<SendIcon />}>Consulter</Button>, <IconButton style={{ backgroundColor: "#00789D" }}><RemoveRedEyeRoundedIcon sx={{ color: '#FFF' }} /> </IconButton>),
            createData('FERDJANI Ghada', 'gg_ferdjani@esi.dz', '26-06-2021', 'Example', <Button variant="contained" style={{ borderRadius: 50, backgroundColor: '#4CAF50' }} endIcon={<SendIcon />}>Consulter</Button>, <IconButton style={{ backgroundColor: "#00789D" }}><RemoveRedEyeRoundedIcon sx={{ color: '#FFF' }} /> </IconButton>),
            createData('FERDJANI Ghada', 'gg_ferdjani@esi.dz', '26-06-2021', 'Example', <Button variant="contained" style={{ borderRadius: 50, backgroundColor: '#4CAF50' }} endIcon={<SendIcon />}>Consulter</Button>, <IconButton style={{ backgroundColor: "#00789D" }}><RemoveRedEyeRoundedIcon sx={{ color: '#FFF' }} /> </IconButton>),
            createData('FERDJANI Ghada', 'gg_ferdjani@esi.dz', '26-06-2021', 'Example', <Button variant="contained" style={{ borderRadius: 50, backgroundColor: '#4CAF50' }} endIcon={<SendIcon />}>Consulter</Button>, <IconButton style={{ backgroundColor: "#00789D" }}><RemoveRedEyeRoundedIcon sx={{ color: '#FFF' }} /> </IconButton>),
            createData('FERDJANI Ghada', 'gg_ferdjani@esi.dz', '26-06-2021', 'Example', <Button variant="contained" style={{ borderRadius: 50, backgroundColor: '#4CAF50' }} endIcon={<SendIcon />}>Consulter</Button>, <IconButton style={{ backgroundColor: "#00789D" }}><RemoveRedEyeRoundedIcon sx={{ color: '#FFF' }} /> </IconButton>),
            createData('FERDJANI Ghada', 'gg_ferdjani@esi.dz', '26-06-2021', 'Example', <Button variant="contained" style={{ borderRadius: 50, backgroundColor: '#4CAF50' }} endIcon={<SendIcon />}>Consulter</Button>, <IconButton style={{ backgroundColor: "#00789D" }}><RemoveRedEyeRoundedIcon sx={{ color: '#FFF' }} /> </IconButton>),
        ];

        return (

            <PageLayout open={this.props.sideBarState}  >

                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73 }} className={classes.tableContainer}>
                    <Grid container spacing={6} justifyContent="center" alignItems="center" alignContent="center" style={{ marginTop: -150 }}>

                        <Grid item xs={10.3} alignItems="center" justifyContent='center' style={{ paddingLeft: 0, paddingTop: 12, paddingBottom: 0, flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 60, alignItems: 'center', marginLeft: '5%', alignContent: "center" }}>
                            <img src={require('../Assets/Img/search.png')} className={classes.iconStyle} />
                            <TextField id="outlined-basic" placeholder='Rechercher un patient' variant="standard" className={classes.search} InputProps={{
                                className: classes.inputProps,
                                style: { fontSize: 40, color: '#00789D', fontWeight: 'bold' }
                            }} />

                            <Link to="/medecin/createdoc" style={{ textDecoration: 'none' }} >
                                <Button style={{ backgroundColor: '#00789D', marginBottom: '1.5%', marginRight: '-5.5%' }} ><text style={{ color: '#FFF', fontWeight: "bold" }}>+ Nouveau Patient</text></Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: 16 }}>
                            <Card className={classes.tableCardStyle}>
                                <CardContent>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nom {'&'} prénom</TableCell>
                                                <TableCell align="center">Email</TableCell>
                                                <TableCell align="center">Dernière consultation</TableCell>
                                                <TableCell align="center">Pathologie</TableCell>
                                                <TableCell align="center"> </TableCell>
                                                <TableCell align="center"> </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell style={{
                                                        alignItems: 'center', justifyContent: 'flex-start', alignContent: 'center', display: 'flex',
                                                    }}>

                                                        <img src={require('../Assets/Img/scientist.png')} className={classes.imageStyle} /> <div style={{ marginLeft: 8, }}>{row.name}</div>


                                                    </TableCell>
                                                    <TableCell align="center">{row.calories}</TableCell>
                                                    <TableCell align="center">{row.fat}</TableCell>
                                                    <TableCell align="center">
                                                        <Chip backgroundColor='red' textColor="#FFF" >
                                                            {row.carbs}
                                                        </Chip>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Link to="/medecin/medicalDoc" style={{ textDecoration: 'none' }} >
                                                            {row.protein}
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Link to="/medecin/medicalDoc" style={{ textDecoration: 'none' }} >
                                                            {row.variable}
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                </Box>
                

            </PageLayout >
        )
    }
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



const styles = {
    tableContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 16,

    },
    search: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        height: 50,
        width: '70%',
    },
    inputProps: {
        maxWidth: '95%',
        height: 40,
        padding: 10,
    },
    tableCardStyle: {
        width: '90%',
        marginLeft: '5%'
    },
    iconStyle: {
        width: 36,
        height: 36,
        marginLeft: '-7%'
    },
    imageStyle: {
        width: 40,
        height: 40,
    },
    beginButton: {
        borderRadius: 50,
    }
}

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(MedicalDoc);