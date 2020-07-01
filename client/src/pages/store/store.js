import React, { Component } from "react";
import axios from "axios";

//styles
import styles from "./store.module.css";

//components
import StoreItem from "../../components/StoreItem/StoreItem";

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
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/store").then((res) => {
      console.log(res.data);
      this.setState({ products: res.data });
    });
  }

  render() {
    let storeItems = this.state.products.map((product) => (
      <Grid item sm={4} xs={12}>
        <StoreItem product={product} />
      </Grid>
    ));
    return (
      <Grid container spacing={4}>
        {storeItems}
      </Grid>
    );
  }
}

export default store;
