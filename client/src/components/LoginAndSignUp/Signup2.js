import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SuccessSnackBar from "../snackBar/SuccessSnackBar";
// import userService from "../../services/UserService";
import CustomBackdrop from "../backdrop/CustomBackdrop";
import userService from "../../services/UserService";
import SnackBar from "../snackBar/SnackBar";
import RedirectToHome from "../../auth/RedirectToHome";
// import { useSelector, useDispatch } from "react-redux";
// import CheckLogIn from "../../auth/CheckLogIn";
// import { trueLogin } from "../../Redux/actions/LoginAction";
// import SnackBar from "../snackBar/SnackBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.instagram.com/arqamshakeel/">
        Trakouts
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup2 = (props) => {
  // const isLoggedInRedux = useSelector((state) => state.login.isloggedin);
  // console.log("redux is loggedin: " + isLoggedInRedux);
  // const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);

  const classes = useStyles();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [sucessOpen, setSucessOpen] = React.useState(false);

  const [sucessMsg, setSucessMsg] = React.useState("");
  const handleLogin = () => {
    setLoginProgress(true);
    userService
      .UserReg({
        email: email.toLowerCase(),
        password: password,
        fname: fname,
        lname: lname,
      })
      .then(function (res) {
        setSucessOpen(true);
        setSucessMsg("Account successfully created");
        props.history.push("/signin");
        setLoginProgress(false);
      })
      .catch(function (error) {
        setLoginProgress(false);
        // setOpen(true);
        // if (error.response) {
        //   setmsg(error.response.data);
        // }
      });
  };
  return (
    <RedirectToHome>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <SuccessSnackBar
              open={sucessOpen}
              setOpen={setSucessOpen}
              msg={sucessMsg}
            />
            <form className={classes.form}>
              <TextField
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                variant="filled"
                margin="normal"
                required
                fullWidth
                label="First name"
                name="email"
                autoComplete="name"
                autoFocus
              />
              <TextField
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                variant="filled"
                margin="normal"
                required
                fullWidth
                label="Last name"
                name="email"
                autoComplete="lname"
                autoFocus
              />
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="filled"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <SnackBar open={open} setOpen={setOpen} msg={msg} />
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
              >
                Sign up
              </Button>
              {/* <CircularProgress color="secondary" />; */}
              <CustomBackdrop open={loginProgress} setOpen={setLoginProgress} />
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => {
                      props.history.push("/signin");
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </RedirectToHome>
  );
};
export default Signup2;
