import React, { Component, Fragment } from "react";
import axios from "axios";

//material ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";

//icons
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

class DisplayRequests extends Component {
  addFriend = (sendername, id) => {
    const user = {
      sendername: sendername,
    };

    axios
      .patch(`http://localhost:5000/friend/add/${id}`, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    window.location = "/";
  };

  deleteRequest = (sendername, id) => {
    const user = {
      sendername: sendername,
    };
    const headers = {};

    axios
      .delete(`http://localhost:5000/friend/delete/${id}`, { data: user })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    window.location = "/";
  };

  render() {
    const requests = this.props.requests;
    return (
      <Fragment>
        {requests.map((request) =>
          request.senderusername ? (
            <ListItem key={request._id}>
              <ListItemText primary={request.senderusername} />
              <IconButton
                onClick={() => {
                  this.addFriend(request.senderusername, request.receiverid);
                }}
              >
                <AddIcon color="primary" />
              </IconButton>
              <IconButton
                onClick={() => {
                  this.deleteRequest(
                    request.senderusername,
                    request.receiverid
                  );
                }}
              >
                <DeleteOutlineIcon color="secondary" />
              </IconButton>
            </ListItem>
          ) : null
        )}
      </Fragment>
    );
  }
}

export default DisplayRequests;
