import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box, Card, CardContent, TextField, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { Link } from "react-router-dom";

const steps = ['Informations Patient', 'Adresse', 'Dossier Médical'];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 17,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(88,188,218) 0%,rgb(88,188,218) 50%,rgb(88,188,218) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(88,188,218) 0%,rgb(88,188,218) 50%,rgb(88,188,218) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 35,
    height: 35,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(88,188,218) 0%, rgb(88,188,218)) 50%, rgb(88,188,218) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(88,188,218) 0%, rgb(88,188,218) 50%, rgb(88,188,218) 100%)',
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;



    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      </ColorlibStepIconRoot>
    );
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const classes = useStyles();

  return (
    <Box sx={{ width: '100%', backgroundColor: "#F1F0EA" }} >
      <Grid container >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>

          <Stepper activeStep={activeStep} alternativeLabel sx={{ alignSelf: 'center', marginBottom: 8 }} connector={<ColorlibConnector />} >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon} >{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid container spacing={3} justifyContent="center" style={{}}>
            <Grid item xs={12}></Grid>
            <Card className={classes.cardChart}>
              {
                activeStep == 0 ?
                  props.screenOne : null
              }
              {
                activeStep == 1 ?
                  props.screenTwo : null
              }
              {
                activeStep == 2 ?
                  props.screenThree : null
              }
              <Grid container spacing={3} justifyContent="center" style={{}} >
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={2.5}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto', }} />

                    {activeStep === steps.length - 1 ?
                      <Link to="/medecin/medicalDoc" style={{ textDecoration: 'none' }}>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          style={{ borderRadius: 10, backgroundColor: "#006F91" }}
                        >
                          Finish
                        </Button>
                      </Link>
                      :
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        style={{ borderRadius: 10, backgroundColor: "#006F91" }}
                      >
                        Next
                      </Button>}

                  </Box>
                </Grid>
              </Grid>


            </Card>
            <Grid item xs={12}></Grid>
          </Grid>


        </React.Fragment>
      )}
    </Box>
  );
}

const useStyles = makeStyles({
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
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '75%',
    paddingBottom: 12

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
})

