import React, { Component } from "react";
import axios from "axios";

//material ui
import { Grid } from "@material-ui/core";

//compoents
import Post from "../../components/Post/Post";
import Profile from "../../components/Profile/Profile";

class home extends Component {
  state = {
    posts: null,
    userProfile: {},
  };

  componentDidMount() {
    var token = window.localStorage.getItem("Authentication");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    axios
      .get("/task")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/users/me", config, bodyParameters)
      .then((res) => {
        this.setState({
          userProfile: res.data,
        });
      })
      .catch((err) => {});
  }

  render() {
    let recentPosts = this.state.posts
      ? this.state.posts.map((post) => <Post key={post._id} post={post} />)
      : "Loading...";

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentPosts}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile userProfile={this.state.userProfile} />
        </Grid>
      </Grid>
    );
  }
}

export default home;
