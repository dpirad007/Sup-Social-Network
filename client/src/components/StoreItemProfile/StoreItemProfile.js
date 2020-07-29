import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//styles
import styles from "./StoreItemProfile.module.css";

//material ui
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Tooltip,
  IconButton,
} from "@material-ui/core";

//icon
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import GitHubIcon from "@material-ui/icons/GitHub";

class StoreItemProfile extends Component {
  state = {
    accepted: [],
  };
  check = (id) => {
    axios
      .get(`/requests/check/${id}`)
      .then((res) => {
        this.setState({
          accepted: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      username,
      project,
      projectdetails,
      completed,
      owner,
      _id,
      whatsapplink,
      githublink,
    } = this.props.product;

    const sendername = this.props.sendername;

    const nothing = null;

    var sol = false;

    const check = this.state.accepted.map((friend) => {
      if (friend.accepted.length > 0) {
        return friend.accepted.includes(sendername);
      }
      return [];
    });

    for (let i = 0; i < check.length; i++) {
      if (check[i] === true) {
        sol = true;
      }
    }

    const message = sol ? (
      <Button
        size="small"
        color="primary"
        href={" https://wa.me/91" + whatsapplink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Message
      </Button>
    ) : null;

    const gotProject = (
      <Card className={styles.card}>
        <CardActionArea
          component={Link}
          to={`/user/projects/${owner}`}
          onClick={() => {
            this.check(owner);
          }}
        >
          <CardMedia
            style={{ height: 0, paddingTop: "56%" }}
            image="/githubicon.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {projectdetails}
            </Typography>
            <Typography variant="body1">{username}</Typography>
            <Typography variant="body2" color="textSecondary">
              {"Active: " + completed}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={styles.bottomButtons}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              this.props.sendRequest(_id, owner, sendername);
            }}
          >
            Request
          </Button>
          {message}
          <Tooltip title="Github Repository" placement="right">
            <IconButton
              href={"http://" + githublink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Project" placement="right">
            <IconButton>
              <DeleteOutlineIcon
                color="secondary"
                onClick={() => {
                  this.props.deleteButton(_id);
                  window.location = `/user/projects/${owner}`;
                }}
              />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
    return project ? gotProject : nothing;
  }
}

export default StoreItemProfile;
