import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//component
import AddSup from "../AddSup/AddSup";

//material ui
import {
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  IconButton,
} from "@material-ui/core";

//icons
import InfoIcon from "@material-ui/icons/Info";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HomeIcon from "@material-ui/icons/Home";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";

//styles
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    var token = window.localStorage.getItem("Authentication");
    let navbar = token ? (
      <Fragment>
        <AddSup />

        <Tooltip title="Store" placement="bottom">
          <IconButton className={styles.button} component={Link} to="/store">
            <LocalGroceryStoreIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Home" placement="bottom">
          <IconButton className={styles.button} component={Link} to="/">
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Covid" placement="bottom">
          <IconButton className={styles.button} component={Link} to="/maha">
            <AssessmentIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="About Developers" placement="bottom">
          <IconButton className={styles.button} component={Link} to="/about">
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Fragment>
    ) : (
      <Fragment>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/signup" color="inherit">
          Signup
        </Button>
      </Fragment>
    );
    return (
      <AppBar>
        <Toolbar className={styles.container}>{navbar}</Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
