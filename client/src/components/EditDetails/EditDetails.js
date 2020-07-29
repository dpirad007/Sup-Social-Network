import React, { Component, Fragment } from "react";
import axios from "axios";

//styles
import styles from "./EditDetails.module.css";
import {
  Tooltip,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
class EditDetails extends Component {
  state = {
    bio: "",
    website: "",
    location: "",
    //piclink: "",
    open: false,
  };

  componentDidMount() {
    var token = window.localStorage.getItem("Authentication");
    //console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    axios
      .get("/users/me", config, bodyParameters)
      .then((res) => {
        this.setState({
          bio: res.data.bio,
          website: res.data.website,
          location: res.data.location,
          //piclink: res.data.piclink,
        });
      })
      .catch((err) => console.log(err));
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    var token = window.localStorage.getItem("Authentication");
    console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    const userUpdates = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
    };

    axios
      .patch("/users/me", userUpdates, config, bodyParameters)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    this.handleClose();
    window.location = "/";
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Edit details" placement="right">
          <IconButton className={styles.button} onClick={this.handleClickOpen}>
            <Edit color="primary" />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                type="text"
                label="Bio"
                multiline
                row="3"
                placeholder="How are you feeling?"
                className={styles.TextField}
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="website"
                type="text"
                label="Website"
                placeholder="Your Website"
                className={styles.TextField}
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="location"
                type="text"
                label="Location"
                placeholder="Where you live"
                className={styles.TextField}
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default EditDetails;
