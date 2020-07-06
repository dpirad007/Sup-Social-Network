import React, { Component, Fragment } from "react";
import axios from "axios";

//components
import DisplayRequests from "../../components/DisplayRequests/DisplayRequests";

//styles
import styles from "./ShowRequests.module.css";

//mui icons
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

//material ui stuff
import {
  Tooltip,
  Dialog,
  DialogTitle,
  IconButton,
  List,
} from "@material-ui/core";

class ShowRequests extends Component {
  state = {
    open: false,
    requests: [],
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

  getRequests = (_id) => {
    axios
      .get(`http://localhost:5000/requests/${_id}`)
      .then((res) => {
        //console.log(res);
        this.setState({
          requests: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const _id = this.props.component;
    return (
      <Fragment>
        <Tooltip title="Collaboration requests" placement="right">
          <IconButton
            className={styles.requests}
            onClick={() => {
              this.handleClickOpen();
            }}
          >
            <AssignmentIndIcon
              color="primary"
              onClick={() => {
                this.getRequests(_id);
              }}
            />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">
            Collaboration Requests
          </DialogTitle>
          <List>
            <DisplayRequests requests={this.state.requests} />
          </List>
        </Dialog>
      </Fragment>
    );
  }
}

export default ShowRequests;
