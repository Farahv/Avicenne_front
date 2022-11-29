import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(0.5),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        boxShadow : '0 3px 5px 2px rgba(0, 121, 141, .3)',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor: theme.palette.background.paper,
        border: '1.5px solid #00798D',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#00798D',
            boxShadow: '0 0 0 0.2rem rgba(0,141,121,.25)',
        },
    },
}));

const useStyles = makeStyles({
    textField: {
        "&:before": {
            // normal
            borderBottom: "1px solid orange",
            backgroundColor: 'red'
        },
        "&:after": {
            // focused
            borderBottom: `3px solid green`,
            backgroundColor: 'red'
        },
        "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
            // hover
            borderBottom: `2px solid purple`,
            backgroundColor: 'red'
        }
    }
});

export default function MultipleSelectChip(props) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [age, setAge] = React.useState([]);
    const handleChange = (event) => {
        const { target: { value } } = event;
        setAge(typeof value === 'string' ? value.split(',') : value);
    };
    const classes = useStyles();

    return (
        <div>
            <FormControl sx={{ width: '100%' }}>
            <InputLabel id="label" style={{backgroundColor:'#fff'}}  >{props.label}</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={props.value}
                    multiple
                    
                    onChange={props.setValue}
                    input={<BootstrapInput placeholder="Placeholder" label="HOLA" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    //MenuProps={MenuProps}
                >
                    {props.items.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

