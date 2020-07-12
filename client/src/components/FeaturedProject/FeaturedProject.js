import React, { Component } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./FeaturedProject.module.css";

//material ui
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Chip,
} from "@material-ui/core";

class FeaturedProject extends Component {
  render() {
    const {
      username,
      project,
      projectdetails,
      completed,
      owner,
      featured,
      projectlink,
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
            <Button
              size="small"
              color="primary"
              href={projectlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try It Out
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
    return project && featured === true ? gotProject : nothing;
  }
}

export default FeaturedProject;
