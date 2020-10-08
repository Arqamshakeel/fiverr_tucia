import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LockIcon from "@material-ui/icons/Lock";
// import productService from "../../services/ProductServices";
// import userService from "../../services/UserService";
// import SnackBar from "../snackBar/SnackBar";
import CustomBackdrop from "../backdrop/CustomBackdrop";
import userService from "../../services/UserService";
import SnackBar from "../snackBar/SnackBar";
import SuccessSnackBar from "../snackBar/SuccessSnackBar";
// import CheckLogIn from "../../auth/CheckLogIn";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Family mart
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Settings(props) {
  const classes = useStyles();
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [sucessOpen, setSucessOpen] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const [sucessMsg, setSucessMsg] = React.useState("");
  const [loginProgress, setLoginProgress] = React.useState(false);

  // const handleLogin = () => {
  //   setLoginProgress(true);
  //   userService
  //     .UserReg({
  //       email: email,
  //       password: password,
  //       fname: fname,
  //       lname: lname,
  //     })
  //     .then(function (res) {
  //       setLoginProgress(false);
  //       props.history.push("/signin");
  //       // console.log(res);
  //     })
  //     .catch(function (error) {
  //       setLoginProgress(false);
  //       setOpen(true);
  //       setmsg(error.response.data);
  //     });
  // };

  const getDataOnLoad = () => {
    userService
      .getUserDetails(userService.getloggedinuser()._id)
      .then((res) => {
        setEmail(res.email);
        setFname(res.fname);
        setLname(res.lname);
      })
      .catch(() => {});
  };
  const updateUserDetails = () => {
    if (newPassword === "") {
      setOpen(true);
      setmsg("New password must not be empty");
    } else {
      setLoginProgress(true);
      userService
        .updateUserDetails(userService.getloggedinuser()._id, {
          fname: fname,
          lname: lname,
          password: password,
          newPassword: newPassword,
          email: email,
        })
        .then((res) => {
          setLoginProgress(false);
          setSucessOpen(true);
          setSucessMsg("Password successfully changed!");

          setNewPassword("");
          setPassword("");
        })
        .catch((err) => {
          setLoginProgress(false);
          setOpen(true);
          if (err.response) {
            setmsg(err.response.data);
          }
        });
    }
  };
  React.useEffect(getDataOnLoad, []);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <SnackBar open={open} setOpen={setOpen} msg={msg} />
        <SuccessSnackBar
          open={sucessOpen}
          setOpen={setSucessOpen}
          msg={sucessMsg}
        />
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Settings
        </Typography>
        <form className={classes.form} noValidate>
          {/* <SnackBar open={open} setOpen={setOpen} msg={msg} /> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                disabled={true}
                fullWidth
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Old Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={updateUserDetails}
          >
            Update
          </Button>
          <CustomBackdrop open={loginProgress} setOpen={setLoginProgress} />
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
