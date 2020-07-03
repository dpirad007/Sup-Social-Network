import React, { Component } from "react";
import axios from "axios";

//material ui
import { Grid, StylesProvider } from "@material-ui/core";

//styles
import styles from "./userpage.module.css";

//compoents
import StoreItemProfile from "../../components/StoreItemProfile/StoreItemProfile";
import UserProfile from "../../components/UserProfile/UserProfile";

class user extends Component {
  state = {
    profile: {},
    projects: [],
  };
  componentDidMount() {
    const handle = this.props.match.params.id;
    //console.log(handle);
    axios
      .get(`http://localhost:5000/users/me/${handle}`)
      .then((res) => {
        //console.log(res.data);
        this.setState({ profile: res.data });
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/tasks/profile/${handle}`)
      .then((res) => {
        //console.log(res.data);
        this.setState({ projects: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let recentPosts = this.state.projects
      ? this.state.projects.map((project) => (
          <StoreItemProfile key={project._id} product={project} />
        ))
      : "Loading...";
    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          <Grid item sm={12} xs={12} className={styles.card}>
            {recentPosts}
          </Grid>
        </Grid>

        <Grid item sm={4} xs={12}>
          <UserProfile userProfile={this.state.profile} />
        </Grid>
      </Grid>
    );
  }
}

export default user;
