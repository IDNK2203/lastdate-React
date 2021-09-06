import WizardButton from "./button";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
}));

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

const hobbies = [
  "Running",
  "Gaming",
  "Singing",
  "Light Reading",
  "Jugging",
  "Movies",
  "SkateBoarding",
];

function PersonalInfo({ values, handleChange, nextStep, prevStep }) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              value={values.name}
              onChange={handleChange("name")}
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              value={values.description}
              onChange={handleChange("description")}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.language}
                  onChange={handleChange("language")}
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Spanish"}>Spanish</MenuItem>
                  <MenuItem value={"Japanese"}>Japanese</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.gender}
                  onChange={handleChange("gender")}
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
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Hobbies</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  multiple
                  value={values.hobbies}
                  onChange={handleChange("hobbies")}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {hobbies.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                fullWidth
                label="Birthday"
                type="date"
                value={values.dateOfBirth}
                onChange={handleChange("dateOfBirth")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
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

export default PersonalInfo;
