import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Box, Grid, Paper, TextField } from "@material-ui/core";
import DialgueAddTopic from "./componentsForFaqAddMenu/DialgueAddTopic";
import FAQtopicList from "./componentsForFaqAddMenu/FAQtopicList";
import TextEditor from "./componentsForFaqAddMenu/TextEditor";
import QuirlText from "./componentsForFaqAddMenu/QuirlText";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddFAQ({ open: open, setOpen: setOpen }) {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item xs={11}>
            <DialgueAddTopic />
          </Grid>
          <Grid item xs={11}>
            <FAQtopicList />
          </Grid>
          <Grid item xs={11}>
            <TextField margin="dense" label="Artcle Name" fullWidth />
          </Grid>
          <Grid item xs={11}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <TextField
                margin="dense"
                label="Description"
                fullWidth
                multiline
                rows={6}
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item xs={11}>
            {/* <Box display="flex" justifyContent="center" alignItems="center"> */}
            <TextEditor />
            <QuirlText />
            {/* </Box> */}
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
