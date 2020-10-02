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
  Chip,
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
  const [arrayOfFiles, setArrayOfFiles] = React.useState([]);
  const [selectedFileName, setSelectedFileName] = React.useState("");
  const [reload, setReload] = React.useState(false);
  const [filesID, setFilesID] = React.useState(null);

  // const [loaded, setLoaded] = React.useState(0);

  const onChangeHandler = (event) => {
    // console.log(event.target.files[0]);
    // setSelectedFileName(event.target.files[0].name);
    let fileArray = Array.from(event);
    setArrayOfFiles(fileArray);
    setSelectedFile(fileArray);
    console.log(event);
    // console.log(selectedFile);
    // console.log(selectedFile);
  };
  const onClickHandler = () => {
    const data = new FormData();
    for (var x = 0; x < selectedFile.length; x++) {
      data.append("file", selectedFile[x]);
    }
    Axios.post(
      "http://localhost:4000/upload/" +
        userService.getloggedinuser()._id +
        "/" +
        filesID,

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
      setFilesID(res.data);
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
                onChange={(e) => {
                  onChangeHandler(e.target.files);
                  props.setLoaded(0);
                }}
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
            <Grid container>
              <Grid item xs={12}>
                <div>
                  {arrayOfFiles.map((item, index) => {
                    return (
                      <div key={index} style={{ marginBottom: "5px" }}>
                        <Chip
                          color="primary"
                          variant="outlined"
                          label={item.name}
                          onDelete={() => {
                            let temp = arrayOfFiles;
                            for (let index = 0; index < temp.length; index++) {
                              if (temp[index].name === item.name) {
                                console.log("matched 1: " + item.name);
                                temp.splice(index, 1);
                                console.log(temp);
                                setArrayOfFiles(temp);
                                onChangeHandler(temp);
                              }
                            }
                          }}
                          variant="outlined"
                        />
                      </div>
                    );
                  })}
                </div>
              </Grid>
            </Grid>

            <div>
              <Progress max="100" color="success" value={props.loaded}>
                {Math.round(props.loaded, 2)}%
              </Progress>
            </div>
            <LinearProgressWithLabel value={props.loaded} />
          </div>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Upload;
