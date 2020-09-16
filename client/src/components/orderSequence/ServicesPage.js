import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Instructions from "./Instructions";
import Services from "./Services";
import { Grow } from "@material-ui/core";

export default function ServicesPage() {
  const [checkedGrow, setCheckedGrow] = React.useState(false);
  const handleChange = () => {
    console.log("Services page loaded");
    setCheckedGrow((prev) => !prev);
  };

  const [clicked, setClicked] = React.useState(false);
  React.useEffect(handleChange, []);
  return (
    <React.Fragment>
      {!clicked ? (
        <>
          <Typography variant="h6" gutterBottom color="error">
            Instructions
          </Typography>
          <Grow
            in={checkedGrow}
            style={{ transformOrigin: "0 0 0" }}
            {...(checkedGrow ? { timeout: 1000 } : {})}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Services clicked={clicked} setClicked={setClicked} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Services clicked={clicked} setClicked={setClicked} />
              </Grid>
            </Grid>
          </Grow>
        </>
      ) : (
        <Grow
          in={checkedGrow}
          style={{ transformOrigin: "0 0 0" }}
          {...(checkedGrow ? { timeout: 1000 } : {})}
        >
          <TextField
            fullWidth
            // id="outlined-multiline-static"
            label="Any specific instructions..."
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </Grow>
      )}
    </React.Fragment>
  );
}
