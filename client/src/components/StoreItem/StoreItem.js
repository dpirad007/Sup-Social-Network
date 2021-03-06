import React, { Component } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./StoreItem.module.css";

//material ui
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

class StoreItem extends Component {
  render() {
    const {
      username,
      project,
      projectdetails,
      completed,
      owner,
    } = this.props.product;
    const nothing = null;
    const gotProject = (
      <Grid item sm={3} xs={12}>
        <Card className={styles.card}>
          <CardActionArea component={Link} to={`/user/projects/${owner}`}>
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
        </Card>
      </Grid>
    );
    return project ? gotProject : nothing;
  }
}

export default StoreItem;
