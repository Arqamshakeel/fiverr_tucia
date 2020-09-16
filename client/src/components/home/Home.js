import React from "react";
import { Grid, Paper, Box, Button, FormControl } from "@material-ui/core";
import GoogleDrive from "../googleDrive/GoogleDrive";
import Axios from "axios";
import Blog from "../landingPage/Blog";
const Home = (props) => {
  const handleImage = (data) => {
    Axios.get("http://localhost:4000/users")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  };

  React.useEffect(handleImage, []);
  return (
    <div>
      {/* <GoogleDrive /> */}
      <Blog />
    </div>

    // <Grid container>
    //   <Grid item xs={12} md={6} lg={4}></Grid>
    //   <Grid item xs={12} md={6} lg={4}>
    //     <Box display="flex" justifyContent="center" alignItems="center">
    //       {/* <Button
    //         variant="contained"
    //         color="primary"
    //         onClick={() => {
    //           props.history.push("/order");
    //         }}
    //       >
    //         Get started
    //       </Button>

    //       <GoogleDrive /> */}

    //       <form action="upload" method="POST" encType="multipart/form-data">
    //         <input type="file" name="file" id="file"></input>
    //         <label htmlFor="file">Choose file</label>

    //         <input type="submit" value="submit" />
    //       </form>

    //       <FormControl fullWidth>
    //         {/* <InputLabel id="demo-simple-select-outlined-label">
    //               Tags
    //             </InputLabel>
    //             <Select
    //               fullWidth
    //               labelId="demo-simple-select-outlined-label"
    //               id="demo-simple-select-outlined"
    //               value={tags}
    //               onChange={(e) => {
    //                 settags(e.target.value);
    //               }}
    //               label="Area"
    //             >
    //               <MenuItem value={"wapdatown"}>Snacks</MenuItem>
    //               <MenuItem value={"citi"}>Drinks</MenuItem>
    //               <MenuItem value={"canal"}>Chocolates</MenuItem>
    //             </Select> */}
    //         <Button
    //           style={{ marginTop: "10px" }}
    //           variant="contained"
    //           component="label"
    //           //   className={classes.TextFieldMarginTop}
    //         >
    //           Upload Picture
    //           <input
    //             type="file"
    //             style={{ display: "none" }}
    //             accept="image/*"
    //             onChange={(event) => {
    //               handleImage(event);
    //             }}
    //           />
    //         </Button>
    //       </FormControl>
    //     </Box>
    //     {/* <Box display="flex" justifyContent="center" alignItems="center">
    //       {" "}
    //       This only Page is in construction...
    //     </Box> */}
    //   </Grid>
    //   <Grid item xs={12} md={6} lg={4}></Grid>
    // </Grid>
  );
};

export default Home;
