import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { styled } from '@mui/material/styles';

import Page from '../Components/Page.js';
import Stepper from '../Components/Stepper';
import MultipleSelectChip from '../Components/selectChip.js';

import { Grid, Box, TextField } from '@mui/material'
import { withStyles, createStyles } from '@mui/styles';
import { makeStyles } from '@mui/styles';


const chipSelect = [
    'Allergie 1',
    'Allergie 2',
    'Allergie 3',
    'Allergie 4',
    'Allergie 5',
    'Allergie 6',
    'Allergie 7',
    'Allergie 8',
    'Allergie 9',
    'Allergie 10',
];

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


class FormMedicalDoc extends React.Component {

    state = {
        symptoms: [],
        pathologies: [],
        allergies: [],
        medicaments: [],
        historiquePere: '',
        historiqueMere: '',
        historiqueEp: '',
        historiqueEnf: '',
        historique: ''

    }


    setSymptoms = (event) => {
        const { target: { value } } = event;
        this.setState({
            symptoms: typeof value === 'string' ? value.split(',') : value
        });
    }
    setPathologies = (event) => {
        const { target: { value } } = event;
        this.setState({
            pathologies: typeof value === 'string' ? value.split(',') : value
        });
    }
    setAllergies = (event) => {
        const { target: { value } } = event;
        this.setState({
            allergies: typeof value === 'string' ? value.split(',') : value
        });
    }
    setMedicaments = (event) => {
        const { target: { value } } = event;
        this.setState({
            medicaments: typeof value === 'string' ? value.split(',') : value
        });
    }
    setHistorique = (event) => {
        this.setState({ historique: event.target.value })
    }
    setHistoriquePere = (event) => {
        this.setState({ historiquePere: event.target.value })
    }
    setHistoriqueMere = (event) => {
        this.setState({ historiqueMere: event.target.value })
    }
    setHistoriqueEp = (event) => {
        this.setState({ historiqueEp: event.target.value })
    }
    setHistoriqueEnf = (event) => {
        this.setState({ historiqueEnf: event.target.value })
    }

    render() {
        const { classes } = this.props;
        return (
            <PageLayout open={this.props.sideBarState}  >
                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73 }} >

                    <Grid container spacing={3} justifyContent="flex-end" style={{ backgroundColor: '#F1F0EA', paddingTop: 12 }}>
                        <Grid item xs={12}>
                            <Stepper
                                screenOne={<ScreenOne />}
                                screenTwo={<ScreenTwo />}
                                screenThree={<ScreenThree
                                    setHistoriqueEnf={this.setHistoriqueEnf}
                                    setHistoriqueEp={this.setHistoriqueEp}
                                    setHistoriquePere={this.setHistoriquePere}
                                    setHistoriqueMere={this.setHistoriqueMere}
                                    setMedicaments={this.setMedicaments}
                                    setHistorique={this.setHistorique}
                                    setSymptoms={this.setSymptoms}
                                    setPathologies={this.setPathologies}
                                    setAllergies={this.setAllergies}
                                    symptoms={this.state.symptoms}
                                    pathologies={this.state.pathologies}
                                    allergies={this.state.allergies}
                                    medicaments={this.state.medicaments}
                                    historiquePere={this.state.historiquePere}
                                    historiqueMere={this.state.historiqueMere}
                                    historiqueEp={this.state.historiqueEp}
                                    historiqueEnf={this.state.historiqueEnf}
                                    historique={this.state.historique}
                                />}
                            />
                        </Grid>

                    </Grid>
                </Box>

            </PageLayout >
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
                <text className={classes.title}>Informations Personnelles</text>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Nom" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Prénom(s)" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Date de Naissance" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Emploi" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="N° Sécurité Sociale" variant="outlined" fullWidth className={classes.textField} />
            </Grid>


        </Grid>
    )

}

function ScreenTwo(props) {

    const classes = useStyles();

    return (
        <Grid container spacing={2} style={{ padding: 16 }}>
            <Grid item xs={3} style={{
                paddingLeft: 0,
                marginLeft: -10
            }}>
                <text className={classes.title}>Adresse</text>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={12} >
                <TextField id="outlined-basic" label="Adresse" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Ville" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Wilaya" variant="outlined" fullWidth className={classes.textField} />
            </Grid>
            <Grid item xs={4} >
                <TextField id="outlined-basic" label="Code Postal" variant="outlined" fullWidth className={classes.textField} />
            </Grid>


        </Grid>
    )

}


function ScreenThree(props) {

    const classes = useStyles();

    return (
        <Grid container spacing={2} style={{ padding: 16 }}>
            <Grid item xs={7} style={{
                paddingLeft: 0,
                marginLeft: -10
            }}>
                <text className={classes.title}>Dossier Médical Patient</text>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={12} >
                <MultipleSelectChip
                    setValue={props.setSymptoms}
                    value={props.symptoms}
                    label="Symptômes"
                    items={chipSelect} />
            </Grid>

            <Grid item xs={12} >
                <MultipleSelectChip
                    setValue={props.setPathologies}
                    value={props.pathologies}
                    label="Pathologies"
                    items={chipSelect} />
            </Grid>
            <Grid item xs={12} >
                <MultipleSelectChip
                    setValue={props.setAllergies}
                    value={props.allergies}
                    label="Allergies"
                    items={chipSelect} />
            </Grid>
            <Grid item xs={12} >
                <MultipleSelectChip
                    setValue={props.setMedicaments}
                    value={props.medicaments}
                    label="Médicaments"
                    items={chipSelect} />
            </Grid>
            <Grid item xs={12} >
                <TextField
                    id="outlined-basic"
                    label="Historique Patient"
                    variant="outlined"
                    value={props.historique}
                    fullWidth
                    className={classes.textField}
                    multiline
                    rows={4}
                    handleChange={props.setHistorique}
                />
            </Grid>
            <Grid item xs={6} >
                <TextField
                    id="outlined-basic"
                    label="Historique Père"
                    variant="outlined"
                    fullWidth
                    value={props.historiquePere}
                    className={classes.textField}
                    multiline
                    rows={4}
                    onChange={props.setHistoriquePere}
                />
            </Grid>
            <Grid item xs={6} >
                <TextField
                    id="outlined-basic"
                    label="Historique Mère"
                    variant="outlined"
                    fullWidth value={props.historiqueMere}
                    className={classes.textField}
                    multiline
                    rows={4}
                    onChange={props.setHistoriqueMere}
                />
            </Grid>
            <Grid item xs={6} >
                <TextField
                    id="outlined-basic"
                    label="Historique Epouse"
                    variant="outlined"
                    fullWidth
                    value={props.historiqueEp}
                    className={classes.textField}
                    multiline
                    rows={4}
                    onChange={props.setHistoriqueEp}
                />
            </Grid>
            <Grid item xs={6} >
                <TextField
                    id="outlined-basic"
                    label="Historique Enfants"
                    variant="outlined"
                    fullWidth
                    value={props.historiqueEnf}
                    className={classes.textField}
                    multiline
                    rows={4}
                    onChange={props.setHistoriqueEnf}
                />
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
    cardChart: {
        boxShadow: "5px 5px 15px #9E9E9E",
        minHeight: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
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
)(FormMedicalDoc);
