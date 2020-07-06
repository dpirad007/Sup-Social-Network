import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//components
import EditDetails from "../../components/EditDetails/EditDetails";
import AddProject from "../../components/AddProject/AddProject";
import ShowRequests from "../../components/ShowRequests/ShowRequests";

//styles
import styles from "./Profile.module.css";

//material ui
import {
  Button,
  Paper,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import {
  LocationOn,
  Link as LinkIcon,
  CalendarToday,
  ExitToApp,
} from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

class Profile extends Component {
  handleLogout = () => {
    var token = window.localStorage.getItem("Authentication");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    const user = {};
    axios
      .post("http://localhost:5000/users/logout", user, config, bodyParameters)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    window.localStorage.removeItem("Authentication");
    window.location = "/";
  };

  render() {
    const {
      userProfile: { name, createdAt, piclink, bio, website, location, _id },
    } = this.props;

    var token = window.localStorage.getItem("Authentication");

    let profile = token ? (
      <Paper className={styles.paper}>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img src={piclink} alt="profilepic" />
          </div>
          <ShowRequests component={_id} />
          <hr className={styles.hruler} />
          <div className={styles.profileDetails}>
            <MuiLink
              component={Link}
              to={`/user/${_id}`}
              color="primary"
              variant="h5"
            >
              @{name}
            </MuiLink>
            <hr />
            {bio && (
              <Fragment>
                <Typography variant="body2">{bio}</Typography>
                <hr />
              </Fragment>
            )}
            {location && (
              <Fragment>
                <LocationOn color="primary" /> <span>{location}</span>
                <hr />
              </Fragment>
            )}
            {website && (
              <Fragment>
                <LinkIcon color="primary" />
                <a
                  href={"http://" + website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"  "}
                  {website}
                </a>
                <hr />
              </Fragment>
            )}
            <CalendarToday color="primary" />{" "}
            <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
          </div>
          <Tooltip title="Logout" placement="right">
            <IconButton onClick={this.handleLogout}>
              <ExitToApp color="primary" />
            </IconButton>
          </Tooltip>
          <EditDetails />
          <AddProject />
        </div>
      </Paper>
    ) : (
      <Paper className={styles.paper}>
        <Typography className={styles.text} variant="h6">
          No Profile found, please login or Signup
        </Typography>
        <div className={styles.button}>
          <Button
            className={styles.login}
            variant="outlined"
            color="secondary"
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            className={styles.signup}
            variant="outlined"
            color="primary"
            component={Link}
            to="/signup"
          >
            Signup
          </Button>
        </div>
      </Paper>
    );

    return profile;
  }
}

export default Profile;
