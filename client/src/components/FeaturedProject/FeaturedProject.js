import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./FeaturedProject.module.css";

//material ui
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Chip,
} from "@material-ui/core";

//icon
import DoneIcon from "@material-ui/icons/Done";

class FeaturedProject extends Component {
  render() {
    const {
      username,
      project,
      projectdetails,
      completed,
      owner,
      featured,
    } = this.props.product;
    const nothing = null;
    const gotProject = (
      <Grid item sm={3} xs={12}>
        <Card className={styles.card}>
          <Chip
            label="Featured"
            color="primary"
            variant="outlined"
            className={styles.chip}
          />
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
          <CardActions>
            <Button size="small" color="primary">
              Add
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
    return project && featured === true ? gotProject : nothing;
  }
}

export default FeaturedProject;