import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(1, 0),
  },
  icon: {
    paddingRight: theme.spacing(0.5),
    width: "24px",
  },
}));

function OAuthLinks() {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      className="auth__Providers"
      fullWidth
    >
      <Grid item xs={12} sm={6}>
        <Link color="primary" className={classes.link}>
          <FacebookIcon className={classes.icon} />
          Sign in with Facebook
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link color="default" className={classes.link}>
          <img
            alt="google logo icon"
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            className={classes.icon}
          />
          Sign in with Google
        </Link>
      </Grid>
    </Grid>
  );
}

export default OAuthLinks;
