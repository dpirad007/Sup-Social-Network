import React, { Component, Fragment } from "react";
import axios from "axios";

//styles
import styles from "./DisplayFriendNames.module.css";

//material ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";

//icons
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { StylesProvider } from "@material-ui/core";

class DisplayFriendNames extends Component {
  render() {
    const data = this.props.data;

    var friendnames = data.map((friend) => friend.accepted[0].accept);

    return (
      <Fragment>
        {friendnames.map((request) => (
          <ListItem>
            <ListItemText primary={request} className={styles.listtext} />
          </ListItem>
        ))}
      </Fragment>
    );
  }
}

export default DisplayFriendNames;
