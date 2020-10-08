import React from "react";
import {
  Grid,
  Paper,
  Box,
  Button,
  FormControl,
  Typography,
} from "@material-ui/core";
import GoogleDrive from "../googleDrive/GoogleDrive";
import PropTypes from "prop-types";
import Axios from "axios";
import { Progress } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import Blog from "../landingPage/Blog";
import PayPalButton from "../paypal/PayPalButton";
import Paypal from "../paypal/PayPal";
import MaterialTable from "../materialTable/MaterialTable";
import Material_Table from "../materialTable/MaterialTable";
import MainFeaturedPost from "../landingPage/MainFeaturedPost";
import Pricing from "../pricing/Pricing";
import { withRouter } from "react-router-dom";
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
const Home = (props) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loaded, setLoaded] = React.useState(0);
  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files);
    // console.log(selectedFile);
  };
  const onClickHandler = () => {
    const data = new FormData();
    for (var x = 0; x < selectedFile.length; x++) {
      data.append("file", selectedFile[x]);
    }
    Axios.post("http://localhost:4000/upload", data, {
      // receive two    parameter endpoint url ,form data
      onUploadProgress: (ProgressEvent) => {
        setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
      },
    }).then((res) => {
      // then print response status
      console.log(res.statusText);
    });
  };
  const handleImage = (data) => {
    Axios.get("http://localhost:4000/data")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {});
    // Axios.post("http://localhost:4000/upload", data)
    //   .then((res) => {
    //     // console.log(res);
    //   })
    //   .catch((error) => {});
  };

  // React.useEffect(handleImage, []);
  return (
    // <div>
    //   <Button
    //     style={{ marginTop: "10px" }}
    //     variant="contained"
    //     component="label"
    //     //   className={classes.TextFieldMarginTop}
    //   >
    //     Upload Picture
    //     <input
    //       type="file"
    //       name="file"
    //       id="file"
    //       style={{ display: "none" }}
    //       multiple
    //       // accept="image/*"
    //       onChange={(event) => {
    //         handleImage(event);
    //       }}
    //     />
    //   </Button>
    // </div>

    // <div>
    //   {/* <GoogleDrive /> */}

    // </div>

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

    // <form action="upload" method="POST" encType="multipart/form-data">
    //   <Button
    //     style={{ marginTop: "10px" }}
    //     variant="contained"
    //     component="label"
    //     // className={classes.TextFieldMarginTop}
    //   >
    //     Upload Picture
    //     <input
    //       type="file"
    //       name="file"
    //       id="file"
    //       style={{ display: "none" }}
    //       // multiple
    //       // accept="image/*"
    //       // onChange={(event) => {
    //       //   handleImage(event);
    //       // }
    //     />
    //   </Button>
    //   <Button type="submit"> upload</Button>
    // </form>
    <div>
      {/* <Blog /> */}
      <MainFeaturedPost post={mainFeaturedPost} />
      {/* <Pricing /> */}
      <div style={{ margin: "10px" }}>
        <Pricing />
      </div>
      {/* <input type="file" name="file" multiple onChange={onChangeHandler} />
      <Button variant="contained" color="primary" onClick={onClickHandler}>
        Upload
      </Button>
      <div class="form-group">
        <Progress max="100" color="success" value={loaded}>
          {Math.round(loaded, 2)}%
        </Progress>
      </div>
      <LinearProgressWithLabel value={loaded} />

      <PayPalButton />
      <Paypal /> */}
      {/* <MaterialTable /> */}
    </div>
    // <div>
    //   <Button
    //     style={{ marginTop: "10px" }}
    //     variant="contained"
    //     component="label"
    //     //   className={classes.TextFieldMarginTop}
    //   >
    //     Upload Picture
    //     <input
    //       type="file"
    //       name="file"
    //       id="file"
    //       style={{ display: "none" }}
    //       // multiple
    //       // accept="image/*"
    //       onChange={(event) => {
    //         handleImage(event);
    //       }}
    //     />
    //   </Button>
    //   <Button type="submit"> upload</Button>
    // </div>
    // <form action="upload" method="POST" encType="multipart/form-data">

    // <FormControl fullWidth>
    //   {/* <InputLabel id="demo-simple-select-outlined-label">
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
    //   <Button
    //     style={{ marginTop: "10px" }}
    //     variant="contained"
    //     component="label"
    //     //   className={classes.TextFieldMarginTop}
    //   >
    //     Upload Picture
    //     <input
    //       type="file"
    //       style={{ display: "none" }}
    //       accept="image/*"
    //       onChange={(event) => {
    //         handleImage(event.target.files[0]);
    //         console.log(event.target.files);
    //       }}
    //     />
    //   </Button>
    // </FormControl>
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

export default withRouter(Home);
