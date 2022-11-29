import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { styled } from '@mui/material/styles';
import Page from '../Components/Page.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
} from 'chart.js';

import { Bar, Pie, Line } from 'react-chartjs-2';
import { Grid, Box, Card, CardContent } from '@mui/material'
import { withStyles, createStyles } from '@mui/styles'




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



    render() {
        const { classes } = this.props;
        return (
            <PageLayout open={this.props.sideBarState}  >

                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73, }} >
                    <Grid container spacing={6} justifyContent="center" alignItems="flex-start" style={{ marginTop: 0, paddingTop: 0, marginTop: -150,paddingLeft: 15,paddingRight:15 }}>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{alignContent:'center',alignItems:'center',height:120,borderRadius:20}}>
                                <Grid container spacing={5} >
                                    <Grid item xs={2}>
                                        <img src={require('../Assets/Img/pic.jpg')} style={{ width: 75, height: 75,borderRadius:10, paddingTop:16,paddingLeft:6}} alt="hey" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <div style={{ textAlign: 'start', paddingTop: 5, paddingLeft: 18 }} >
                                            <text style={{ fontSize: 18, fontWeight: 'bold' }}>Ibrahim CHOUAIB   </text><text style={{fontSize:14,color:'#34B06D'}}>ouvert actuellement</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Ophtalmologue</text><br></br>
                                            <text style={{ fontSize: 11, fontWeight: 'bold',  }}>Bab Ezzouar, Alger</text>
                                        </div>
                                    </Grid>
                                </Grid>
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
    }
};


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Dashboard);