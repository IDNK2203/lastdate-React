import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import WizardButton from "./button";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: 300,
  },
  gridItem: {
    margin: theme.spacing(1, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    paddingRight: theme.spacing(0.5),
    width: "32px",
  },
}));

function AddInfo({ values, handleChange, nextStep, prevStep }) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item className={classes.gridItem}>
                <img
                  className={classes.icon}
                  alt="spotify icon"
                  src="https://img.icons8.com/doodle/48/000000/spotify.png"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item className={classes.gridItem}>
                <img
                  className={classes.icon}
                  alt="instagram icon"
                  src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
                />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item className={classes.gridItem}>
                <AccountCircle />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item className={classes.gridItem} xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">You Like Fruit?</FormLabel>
            <RadioGroup
              aria-label="fruit"
              name="fruit"
              value={values.fruit}
              onChange={handleChange("fruit")}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
              <FormControlLabel
                value="Perhaps"
                control={<Radio />}
                label="Perhaps"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item className={classes.gridItem} xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">You Like Running?</FormLabel>
            <RadioGroup
              aria-label="fruit"
              name="fruit"
              value={values.running}
              onChange={handleChange("running")}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
              <FormControlLabel
                value="Perhaps"
                control={<Radio />}
                label="Perhaps"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1}
          className="auth__Providers"
          fullWidth
        >
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <WizardButton buttonType={"Prev"} handler={prevStep}></WizardButton>
          </Grid>
          <Grid item className={classes.gridItem} xs={12} sm={6}>
            <WizardButton buttonType={"Next"} handler={nextStep}></WizardButton>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Grid item className={classes.gridItem}>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddInfo;
