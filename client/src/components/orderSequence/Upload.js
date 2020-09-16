import React from "react";
import { Grid, FormControl, Button, Box, Grow } from "@material-ui/core";
const Upload = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  React.useEffect(handleChange, []);
  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              component="label"
              //   className={classes.TextFieldMarginTop}
            >
              Upload Picture
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                // onChange={(event) => {
                //   handleImage(event);
                //
              />
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              width="80%"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Upload;
