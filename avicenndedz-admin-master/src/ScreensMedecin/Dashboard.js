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


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
);



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.random()),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.random()),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const data2 = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.random() * (50)),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.random() * (50)),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const data3 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

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

                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73 }} >
                    <Grid container spacing={6} justifyContent="center" alignItems="flex-start" style={{ marginTop: 0, paddingTop: 0, marginTop: -150 }}>

                        <Grid item xs={5.5} >
                            <Card className={classes.cardChart}>
                                <CardContent  >
                                    <Bar data={data} />
                                    
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card className={classes.cardChart}>
                                <CardContent>
                                    <Pie data={data3} />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ marginTop: 0, paddingTop: 0 }}>

                        <Grid item xs={5.5} >
                            <Card className={classes.cardChart}>
                                <CardContent  >
                                    <Bar data={data} />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Card className={classes.cardChart}>
                                <CardContent>
                                    <Line data={data2} />
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
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
    }
};


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Dashboard);