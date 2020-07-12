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
      post: { description, createdAt, username, piclink, owner },
    } = this.props;

    const nothing = null;
    const gotDescription = (
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
            to={`/user/${owner}`}
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
    return description ? gotDescription : nothing;
  }
}

export default Post;
