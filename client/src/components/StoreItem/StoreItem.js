import React, { Component } from "react";

//styles
import styles from "./StoreItem.module.css";

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

class StoreItem extends Component {
  render() {
    const { name, category, image, price } = this.props.product;
    return (
      <div>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              image="/githubicon.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {category}
              </Typography>
              <Typography variant="h5">{price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default StoreItem;
