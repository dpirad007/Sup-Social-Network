import React, { Component, Fragment } from "react";

//styles
import styles from "./DisplayFriendNames.module.css";

//material ui
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class DisplayFriendNames extends Component {
  render() {
    const data = this.props.data;

    var friendnames = data.map((friend) => friend.accepted);

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
