import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles"; //

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: "#01bb88",
    color: "white",
    "&:hover": {
      backgroundColor: "#01bb88",
    },
  },
}));

function WizardButton({ buttonType, handler }) {
  const classes = useStyles();

  console.log(buttonType);
  switch (buttonType) {
    case "Next":
      return (
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handler}
          className={classes.submit}
        >
          Next
        </Button>
      );
    case "Prev":
      return (
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handler}
          className={classes.submit}
        >
          Prev
        </Button>
      );
    case "Submit":
      return (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handler}
          className={classes.submit}
        >
          Submit
        </Button>
      );
    // never forget the default case, otherwise VS code would be mad!
    default:
    // do nothing
  }
}

export default WizardButton;
