import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//styles
import styles from "./UserProfile.module.css";

//material ui
import { Paper, Typography } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import {
  LocationOn,
  Link as LinkIcon,
  CalendarToday,
  ExitToApp,
} from "@material-ui/icons";

class UserProfile extends Component {
  handleLogout = () => {
    window.localStorage.removeItem("Authentication");
    window.location = "/";
  };

  render() {
    const {
      userProfile: { name, createdAt, piclink, bio, website, location, _id },
    } = this.props;

    return (
      <Paper className={styles.paper}>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img src={piclink} alt="profilepic" />
          </div>
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
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {"  "}
                  {website}
                </a>
                <hr />
              </Fragment>
            )}
            <CalendarToday color="primary" />{" "}
            <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
          </div>
        </div>
      </Paper>
    );
  }
}

export default UserProfile;
