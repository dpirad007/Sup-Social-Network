import React, { Component, Fragment } from "react";
import axios from "axios";

//styles
import styles from "./AddSup.module.css";
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
import AddCircleIcon from "@material-ui/icons/AddCircle";

class AddSup extends Component {
  state = {
    description: "",
    errors: {},
    open: false,
  };

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
    //console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    const task = {
      description: this.state.description,
    };

    axios
      .post("/tasks", task, config, bodyParameters)
      .then((res) => {
        //console.log(res.data);
        window.location = "/";
      })
      .catch((err) => {
        //console.log(err.response.data);
        this.setState({
          errors: err.response.data,
        });
      });
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Add Post" placement="bottom">
          <IconButton className={styles.button} onClick={this.handleClickOpen}>
            <AddCircleIcon />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add your post</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="description"
                type="text"
                label="Sup"
                multiline
                row="3"
                helperText={this.state.errors._message}
                error={this.state.errors._message ? true : false}
                placeholder="Whats SUP?"
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

export default AddSup;
