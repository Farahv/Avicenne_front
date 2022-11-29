import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { styled } from '@mui/material/styles';
import { ReactAgenda, ReactAgendaCtrl, guid, getUnique, getLast, getFirst, Modal } from 'react-agenda';
import { Grid, Box, Card, TextField, Typography, Button, InputLabel, Select, FormControl, MenuItem } from '@mui/material'
import Page from '../Components/Page.js';
import {
    ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
    ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
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
        return (
            <PageLayout open={this.props.sideBarState}  >
                <Box style={{ width: this.props.sideBarState ? `calc(100% - ${240}px)` : `calc(100% - ${73}px)`, marginLeft: this.props.sideBarState ? 240 : 73 }} >
           
                <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.data }}>
                    <ViewsDirective>
                        <ViewDirective option='WorkWeek' startHour='10:00' endHour='18:00' />
                        <ViewDirective option='Week' startHour='07:00' endHour='15:00' />
                        <ViewDirective option='Month' showWeekend={false} />
                    </ViewsDirective>
                    <Inject services={[WorkWeek, Week, Month]} />
                </ScheduleComponent>
                </Box>
            </PageLayout>
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