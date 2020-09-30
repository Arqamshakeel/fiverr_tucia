import React from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Progress } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  FormControl,
  Button,
  Box,
  Grow,
  Typography,
} from "@material-ui/core";
import userService from "../../services/UserService";
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
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const Upload = (props) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  // const [loaded, setLoaded] = React.useState(0);

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
    Axios.post(
      "http://localhost:4000/upload/" + userService.getloggedinuser()._id,
      data,
      {
        // receive two    parameter endpoint url ,form data
        onUploadProgress: (ProgressEvent) => {
          props.setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      }
    ).then((res) => {
      console.log("Response Files id: " + res.data);
      props.setFilesId(res.data);
    });
  };

  //till upload
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const selectedPricing = useSelector((state) => state.pricing.counter);

  React.useEffect(handleChange, []);
  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>you have selected {selectedPricing} Pricing</div>
          <div>
            {selectedPricing === 1 ? (
              <input type="file" name="file" onChange={onChangeHandler} />
            ) : (
              <input
                type="file"
                name="file"
                multiple
                onChange={onChangeHandler}
              />
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={onClickHandler}
              style={{ float: "right" }}
              disabled={selectedFile ? false : true}
            >
              Upload
            </Button>

            <div>
              <Progress max="100" color="success" value={props.loaded}>
                {Math.round(props.loaded, 2)}%
              </Progress>
            </div>
            <LinearProgressWithLabel value={props.loaded} />
          </div>
        </Grid>
        {/* <Grid item xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              width="80%"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
              alt=""
            />
          </Box>
        </Grid> */}
      </Grid>
    </Grow>
  );
};

export default Upload;
