import { Component } from "react";
import AddInfo from "./addInfo";
import LoginInfo from "./loginInfo";
import MatchInfo from "./matchInfo";
import PersonalInfo from "./personalInfo";
import RegSuccess from "./regSuccess";

import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#01bb88",
    color: "white",
    // backgroundColor:"#01bb88" theme.palette.secondary.main,
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function AvatarCom() {
  const classes = useStyles();
  return (
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
  );
}

export default class Register extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    dateOfBirth: new Date("2014-08-18T21:11:54"),
    language: "",
    gender: "",
    description: "",
    hobbies: [],
    matchMaxAge: 40,
    matchMinAge: 40,
    matchMaxLocalization: "",
    matchGender: "",
    SocialMediaLinks: [],
    fruits: "",
    running: "",
    profileImage: "",
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSliderChange = (input) => (event, newValue) => {
    this.setState({ [input]: newValue });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  renderSwitch(step, values) {
    switch (step) {
      case 1:
        return (
          <LoginInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeMultiple={this.handleChangeMultiple}
            values={values}
          />
        );
      case 3:
        return (
          <MatchInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleSliderChange={this.handleSliderChange}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <AddInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <RegSuccess
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      // never forget the default case, otherwise VS code would be mad!
      default:
      // do nothing
    }
  }

  render() {
    const { step } = this.state;

    const {
      email,
      passwordConfirm,
      password,
      name,
      dateOfBirth,
      language,
      gender,
      description,
      hobbies,
      matchMaxAge,
      matchMinAge,
      matchMaxLocalization,
      matchGender,
      SocialMediaLinks,
      fruits,
      profileImage,
    } = this.state;
    const values = {
      email,
      passwordConfirm,
      password,
      name,
      dateOfBirth,
      language,
      gender,
      description,
      hobbies,
      matchMaxAge,
      matchMinAge,
      matchMaxLocalization,
      matchGender,
      SocialMediaLinks,
      fruits,
      profileImage,
    };
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <AvatarCom></AvatarCom>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </Grid>

          {this.renderSwitch(step, values)}
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
