import React, { Component, Fragment } from "react";
import axios from "axios";

//styles
import styles from "./AddProject.module.css";
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

import MemoryIcon from "@material-ui/icons/Memory";

class AddProject extends Component {
  state = {
    project: "",
    projectdetails: "",
    completed: "",
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

    const projectUpdates = {
      project: this.state.project,
      projectdetails: this.state.projectdetails,
      completed: this.state.completed,
    };

    axios
      .post(
        "http://localhost:5000/tasks",
        projectUpdates,
        config,
        bodyParameters
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    this.handleClose();
    window.location = "/store";
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Add Project" placement="right">
          <IconButton className={styles.button} onClick={this.handleClickOpen}>
            <MemoryIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add a project to share and collaborate</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="project"
                type="text"
                label="Project Name"
                multiline
                row="3"
                placeholder="Enter your project title"
                className={styles.TextField}
                value={this.state.project}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="projectdetails"
                type="text"
                label="Project description"
                multiline
                row="3"
                placeholder="Tell us more about your project"
                className={styles.TextField}
                value={this.state.projectdetails}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="completed"
                type="text"
                label="Active"
                placeholder="Is your project Active (true or false)"
                className={styles.TextField}
                value={this.state.completed}
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

export default AddProject;