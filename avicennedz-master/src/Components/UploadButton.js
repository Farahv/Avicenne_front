import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

//styles
import { makeStyles } from '@mui/styles';

const Input = styled('input')({
    display: 'none',
});

export default function UploadButton(props) {
    const classes = useStyles();
    return (
        <Stack direction="row" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" helperText="hola" />
                <Button
                    variant="outlined"
                    component="span"
                    style={{
                        minWidth: 220,
                        minHeight: 140,
                        borderWidth: 1.5
                    }}
                >
                    <img
                        src={require('../Assets/Img/new-document.png')}
                        className={classes.iconDoc}
                    />

                </Button>
                <text className={classes.helperText}>Ajouter un fichier</text>
            </label>
        </Stack>
    );
}

const useStyles = makeStyles({
    buttonStyle: {

    },
    iconDoc: {
        height: 80,
        width: 80
    },
    helperText: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#45A9C7',
        marginTop: -5
    }
});