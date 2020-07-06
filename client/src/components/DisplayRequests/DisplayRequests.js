import React, { Component } from "react";

//material ui
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

class DisplayRequests extends Component {
  render() {
    const requests = this.props.requests;
    return (
      <List>
        {requests.map((request) => (
          <ListItem button key={request._id}>
            <ListItemText primary={request.senderusername} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default DisplayRequests;
