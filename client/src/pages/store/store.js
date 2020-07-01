import React, { Component } from "react";

//styles
import styles from "./store.module.css";

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
} from "@material-ui/core";

class store extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm={3} xs={12}>
            <Card className={styles.card}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 0, paddingTop: "56%" }}
                  image="/githubicon.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Journal HardCover
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Thread * 1 per journal
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a
                    href="https://github.com/dpirad007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default store;
