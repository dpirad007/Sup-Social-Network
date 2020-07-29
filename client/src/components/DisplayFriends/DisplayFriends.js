import React, { Component, Fragment } from "react";
import axios from "axios";

//components
import DisplayFriendNames from "../../components/DisplayFriendNames/DisplayFriendNames";

//styles
import styles from "./DisplayFriends.module.css";

//mui icons
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

//material ui stuff
import {
  Tooltip,
  Dialog,
  DialogTitle,
  IconButton,
  List,
} from "@material-ui/core";

class DisplayFriends extends Component {
  state = {
    open: false,
    data: [],
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
      .get(`/getfriends/${_id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));

    // var friendnames = this.state.data.map(
    //   (friend) => friend.accepted[0].accept
    // );
    // this.setState({ friends: friendnames });
  };

  render() {
    const _id = this.props.component;
    return (
      <Fragment>
        <Tooltip title="Collaborators" placement="right">
          <IconButton
            className={styles.requests}
            onClick={() => {
              this.handleClickOpen();
            }}
          >
            <SupervisorAccountIcon
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
          <DialogTitle id="simple-dialog-title">Co Collaborators</DialogTitle>
          <List>
            <DisplayFriendNames data={this.state.data} />
          </List>
        </Dialog>
      </Fragment>
    );
  }
}

export default DisplayFriends;
