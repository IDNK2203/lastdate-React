import WizardButton from "../button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: "100%",
    // color: "#01bb88",
  },
  colorPrimary: {
    color: "#01bb88",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
}));

function valuetext(value) {
  return `${value} years`;
}

function MatchInfo({
  values,
  handleChange,
  nextStep,
  prevStep,
  handleSliderChange,
}) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Match Max Age
              </Typography>
              <Slider
                value={values.matchMaxAge}
                onChange={handleSliderChange("matchMaxAge")}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={4}
                color={"primary"}
                marks
                min={18}
                max={90}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Typography id="discrete-slider" gutterBottom>
                Match Min Age
              </Typography>
              <Slider
                value={values.matchMinAge}
                onChange={handleSliderChange("matchMinAge")}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={4}
                color={"#01bb88"}
                marks
                min={18}
                max={90}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Match Max Localization
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.matchMaxLocalization}
                onChange={handleChange("matchMaxLocalization")}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"State"}>State</MenuItem>
                <MenuItem value={"Country"}>Country</MenuItem>
                <MenuItem value={"WorldWide"}>WorldWide</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                {" "}
                Match Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.matchGender}
                onChange={handleChange("matchGender")}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}
          className="auth__Providers"
          fullWidth
        >
          <Grid item xs={12} sm={6}>
            <WizardButton buttonType={"Prev"} handler={prevStep}></WizardButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <WizardButton buttonType={"Next"} handler={nextStep}></WizardButton>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default MatchInfo;
