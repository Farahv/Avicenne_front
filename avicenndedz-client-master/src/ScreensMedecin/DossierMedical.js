import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { styled } from '@mui/material/styles';

import Page from '../Components/Page.js';
import MultipleSelectChip from '../Components/selectChip.js';
import UploadButton from '../Components/UploadButton'

import { Grid, Box, Card, TextField, Modal, Typography, Button, InputLabel, Select, FormControl, MenuItem } from '@mui/material'
import { withStyles, createStyles } from '@mui/styles'


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


class Dashboard extends React.Component {

    state = {
        symptoms: [],
        pathologies: [],
        allergies: [],
        medicaments: [],
        historiquePere: '',
        historiqueMere: '',
        historiqueEp: '',
        historiqueEnf: '',
        historique: '',
        modal: false,
        prescriptions: [
            {
                medicament: '',
                nbprises: '',
                dosage: '',
                Horaires: [],
                Repas: []
            }
        ]

    }

    componentDidMount() {
        this.props.onHideHeader();
    }

    componentWillUnmount() {
        this.props.onHideHeader();
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



    setModalOpen = () => {
        this.setState({ modal: true })
    }

    setModalClosed = () => {
        this.setState({ modal: false })
    }

    handleChangeMedicament = (event, index) => {
        let prescriptions = this.state.prescriptions
        prescriptions[index].medicament = event.target.value
        this.setState({prescriptions : prescriptions})
    }

    render() {
        const { classes } = this.props;
        return (
            <PageLayout open={this.props.sideBarState}  >
                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73 }} >

                    <Grid container spacing={3} justifyContent="flex-end" style={{ paddingTop: 0, marginTop: -300, paddingRight: 18 }}>
                        <Grid item xs={10}>
                            <Card className={classes.cardHeader} >
                                <Grid container  >
                                    <Grid item xs={2} style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: 12.5 }}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75, borderRadius: 10 }} alt="hey" />
                                    </Grid>
                                    <Grid item xs={6} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding: 35, flexDirection: 'row' }}>
                                        <text style={{
                                            fontSize: 18,
                                            color: '#00798D',
                                            fontWeight: 'bold',
                                            marginLeft: '-25%'
                                        }} >Nom Prénom médecin   /  </text>
                                        <text>Fonction médecin</text>
                                    </Grid>
                                    <Grid item xs={4} >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '12%'
                                        }}>
                                            <Button variant="outlined" style={{ marginRight: 8 }}>Modifier</Button>
                                            <Button variant="contained" onClick={this.setModalOpen} >Prescrire</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={10} >
                            <Card className={classes.cardChart}>
                                <Grid container spacing={2} style={{ padding: 16 }}>
                                    <Grid item xs={1} >
                                        <img src={require('../Assets/Img/programmer.png')} className={classes.titleIcon} />
                                    </Grid>
                                    <Grid item xs={6} style={{
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
                                    <Grid item xs={6} >
                                        <TextField id="outlined-basic" label="Adresse" variant="outlined" fullWidth className={classes.textField} />
                                    </Grid>
                                    <Grid item xs={3} >
                                        <TextField id="outlined-basic" label="Ville" variant="outlined" fullWidth className={classes.textField} />
                                    </Grid>
                                    <Grid item xs={3} >
                                        <TextField id="outlined-basic" label="Code Postal" variant="outlined" fullWidth className={classes.textField} />
                                    </Grid>
                                    <Grid item xs={4} >
                                        <TextField id="outlined-basic" label="Numéro de téléphone" variant="outlined" fullWidth className={classes.textField} />
                                    </Grid>
                                    <Grid item xs={4} >
                                        <TextField id="outlined-basic" label="Langues parlées" variant="outlined" fullWidth className={classes.textField} />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={10} >
                            <Card className={classes.cardChart}>
                                <Grid container spacing={2} style={{ padding: 16 }}>
                                    <Grid item xs={1} >
                                        <img src={require('../Assets/Img/medicalInfos.png')} className={classes.titleIcon} />
                                    </Grid>
                                    <Grid item xs={6} style={{
                                        paddingLeft: 0,
                                        marginLeft: -10
                                    }}>
                                        <text className={classes.title}>Informations Médicales   </text>
                                    </Grid>
                                    <Grid item xs={4}></Grid>
                                    <Grid item xs={12} >
                                        <MultipleSelectChip
                                            setValue={this.setSymptoms}
                                            value={this.state.symptoms}
                                            label="Symptômes"
                                            items={chipSelect} />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <MultipleSelectChip
                                            setValue={this.setPathologies}
                                            value={this.state.pathologies}
                                            label="Pathologies"
                                            items={chipSelect} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <MultipleSelectChip
                                            setValue={this.setAllergies}
                                            value={this.state.allergies}
                                            label="Allergies"
                                            items={chipSelect} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <MultipleSelectChip
                                            setValue={this.setMedicaments}
                                            value={this.state.medicaments}
                                            label="Médicaments"
                                            items={chipSelect} />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField
                                            id="outlined-basic"
                                            label="Historique Patient"
                                            variant="outlined"
                                            value={this.state.historique}
                                            fullWidth
                                            className={classes.textField}
                                            multiline
                                            rows={4}
                                            handleChange={this.setHistorique}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextField
                                            id="outlined-basic"
                                            label="Historique Père"
                                            variant="outlined"
                                            fullWidth
                                            value={this.state.historiquePere}
                                            className={classes.textField}
                                            multiline
                                            rows={4}
                                            onChange={this.setHistoriquePere}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextField
                                            id="outlined-basic"
                                            label="Historique Mère"
                                            variant="outlined"
                                            fullWidth value={this.state.historiqueMere}
                                            className={classes.textField}
                                            multiline
                                            rows={4}
                                            onChange={this.setHistoriqueMere}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextField
                                            id="outlined-basic"
                                            label="Historique Epouse"
                                            variant="outlined"
                                            fullWidth
                                            value={this.state.historiqueEp}
                                            className={classes.textField}
                                            multiline
                                            rows={4}
                                            onChange={this.setHistoriqueEp}
                                        />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextField
                                            id="outlined-basic"
                                            label="Historique Enfants"
                                            variant="outlined"
                                            fullWidth
                                            value={this.state.historiqueEnf}
                                            className={classes.textField}
                                            multiline
                                            rows={4}
                                            onChange={this.setHistoriqueEnf}
                                        />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={10} >
                            <Card className={classes.cardChart}>
                                <Grid container spacing={2} style={{ padding: 16 }}>



                                    <Grid item xs={1} >
                                        <img src={require('../Assets/Img/MedicalDoc@2x.png')} className={classes.titleIcon} />
                                    </Grid>
                                    <Grid item xs={6} style={{
                                        paddingLeft: 0,
                                        marginLeft: -10
                                    }}>
                                        <text className={classes.title}>Documents Médicaux</text>
                                    </Grid>
                                    <Grid item xs={5}></Grid>



                                    <Grid item xs={6} justifyContent="flex-start" style={{
                                        paddingLeft: 0,
                                        marginLeft: '-8%'
                                    }}>
                                        <text className={classes.subTitle}>Ajouter des imageries radios</text>
                                    </Grid>
                                    <Grid item xs={6}></Grid>


                                    <Grid item xs={1.5}></Grid>
                                    <Grid item xs={4} >
                                        <UploadButton />
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={4} >
                                        <UploadButton />
                                    </Grid>
                                    <Grid item xs={1.5}></Grid>
                                    <Grid item xs={6} justifyContent="flex-start" style={{
                                        paddingLeft: 0,
                                        marginLeft: '-2%'
                                    }}>
                                        <text className={classes.subTitle}>Ajouter des documents supplémentaires</text>
                                    </Grid>
                                    <Grid item xs={6}></Grid>


                                    <Grid item xs={1.5}></Grid>
                                    <Grid item xs={4} >
                                        <UploadButton />
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={4} >
                                        <UploadButton />
                                    </Grid>
                                    <Grid item xs={1.5}></Grid>



                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Modal
                    open={this.state.modal}
                    onClose={this.setModalClosed}
                >
                    <Card sx={styleModal}>
                        <Grid container spacing={2} style={{ padding: 16 }}>
                            <Grid item xs={1} >
                                <img src={require('../Assets/Img/programmer.png')} className={classes.titleIcon} />
                            </Grid>
                            <Grid item xs={6} style={{
                                paddingLeft: 0,
                                marginLeft: -10
                            }}>
                                <text className={classes.title}>Prescription</text>
                            </Grid>
                            <Grid item xs={4}></Grid>
                            
                    </Grid>
                </Card>
            </Modal>


            </PageLayout >
        )
    }
}



const mapStateToProps = state => {
    return {
        sideBarState: state.sideBarState,
        headerState: state.headerState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDrawer: () => dispatch({ type: 'TOGGLEDRAWER' }),
        onHideHeader: () => dispatch({ type: 'HIDEHEADER' })
    }
}



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
        fontWeight: 'bold',
        marginLeft: 0
    },
    center: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
};

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Dashboard);