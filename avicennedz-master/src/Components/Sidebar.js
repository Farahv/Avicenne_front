import React, { PureComponent } from 'react'
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

//Imports
import Header from './Header';

//MUI Elements
import { styled, useTheme } from '@mui/material/styles';
import { Box, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, theme, ListItemText, TextField, Menu, MenuItem, Avatar } from '@mui/material';
import { NavItem, NavLink, } from 'reactstrap'
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

//Styling 
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';




const drawerWidth = 240;

const createLinks = (routes, classes) => {
    return routes.map((prop, key) => {
        return (
            <NavItem key={key} >
                <NavLink
                    to={prop.layout + prop.path}
                    tag={NavLinkRRD}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button key={prop.name} style={{ marginBottom: -10 }}>
                        <img src={require("../" + prop.icon)} alt={prop.name} className={classes.menuIcon} />

                        <text className={classes.menuItem}>{prop.name}</text>
                    </ListItem>
                </NavLink>
            </NavItem>
        );
    });
};

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    height: 130,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



const AppBar = styled(
    Header
    , {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

function Sidebar(props) {

    const sideBarState = useSelector( (state)=> state.sideBarState);
    const headerState = useSelector( (state)=> state.headerState);
    const dispatch = useDispatch()

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const openDropDown = Boolean(anchorEl);

   
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>

            <Drawer variant="permanent" open={sideBarState}>
                <DrawerHeader>
                    {sideBarState ? <img src={require('../Assets/Img/logoMDS.png')} alt="logo" style={{ height: '95%' }} /> : null}
                </DrawerHeader>
                {sideBarState ? <text className={classes.subtitleMenu} >Mon activité</text> : null}
                <List>
                    {createLinks(props.routes, classes)}
                </List>
                {sideBarState ? <text className={classes.subtitleMenu} >Mes ressources</text> : null}
                <List>
                    {createLinks(props.routesSecondary, classes)}
                </List>
            </Drawer>
            <AppBar open={sideBarState} style={{ position: 'fixed' }} hideheader={headerState}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={()=>dispatch({ type: 'TOGGLEDRAWER' })}
                        edge="start"
                        sx={{
                            marginRight: '45%',
                            ...(sideBarState),
                            backgroundColor: '#A9F9F7'
                        }}
                    >
                        <MenuIcon color='#00789D' />
                    </IconButton>
                    <TextField id="outlined-basic" placeholder='Rechercher' variant="standard" className={classes.search} InputProps={{
                        className: classes.inputProps,
                    }} />
                    <Avatar sx={{ width: 40, height: 40, marginLeft: 4, backgroundColor: '#A9F9F7' }}>
                        <img src={require('../Assets/Img/notification.png')} className={classes.AvatarImage} />
                    </Avatar>
                    <Tooltip title="Account settings">

                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2, marginRight: 8 }}
                            aria-controls={openDropDown ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openDropDown ? 'true' : undefined}
                        >

                            <Typography variant="h6" component="h5" >{"ARRAR Habib Mehdi"}</Typography>
                        </IconButton>

                    </Tooltip>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={openDropDown}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
            
        </Box>
    )
}



const mapDispatchToProps =  dispatch => {
    return{
        onToggleDrawer : () => dispatch({type : 'TOGGLEDRAWER'})
    }
}

export default connect()(Sidebar);



const useStyles = makeStyles({
    menuItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00789D',
        paddingBottom: 0

    },
    subtitleMenu: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#00789D',
        marginLeft: -110,
        marginBottom: -8
    },

    menuIcon: {
        width: 44,
        height: 44,
        marginRight: 10,
        marginLeft: 2
    },
    inputProps: {
        maxWidth: '85%',
        height: 40,
        padding: 10
    },
    search: {
        backgroundColor: '#FFF',
        width: 300,
        borderRadius: 25,
        alignItems: 'center',
        height: 40
    },
    AvatarImage: {
        width: 32
    },

});


