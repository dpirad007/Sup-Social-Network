import React, { Component } from "react";
import { Link } from "react-router-dom";

//dayjs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//styles
import styles from "./Post.module.css";

//material ui
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

class Post extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      post: { description, createdAt, username, piclink },
    } = this.props;
    // const profilepicfin = "data:image/jpeg;base64," + buf;
    return (
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <CardMedia
            className={styles.image}
            style={{ height: 0, paddingTop: "56%" }}
            image={piclink}
            title="profile picture"
          />
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${username}`}
            color="primary"
          >
            {username}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Post;
