import React, { Component, Fragment } from "react";
import axios from "axios";

//styles
import styles from "./store.module.css";

//components
import StoreItem from "../../components/StoreItem/StoreItem";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";

//material ui
import { Grid, Typography } from "@material-ui/core";

class store extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/task").then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    let storeItems = this.state.products.map((product) => (
      <StoreItem key={product._id} product={product} />
    ));
    let featuredProjectitems = this.state.products.map((product) => (
      <FeaturedProject key={product._id} product={product} />
    ));
    return (
      <Fragment>
        <Typography
          variant="h3"
          color="textSecondary"
          className={styles.header}
        >
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {featuredProjectitems}
        </Grid>
        <Typography
          variant="h3"
          color="textSecondary"
          className={styles.header}
        >
          Explore
        </Typography>
        <Grid container spacing={4}>
          {storeItems}
        </Grid>
      </Fragment>
    );
  }
}

export default store;
