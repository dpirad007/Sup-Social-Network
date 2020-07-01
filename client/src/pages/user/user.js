import React, { Component } from "react";
import axios from "axios";

//material ui
import { Grid } from "@material-ui/core";

//compoents
import Post from "../../components/Post/Post";
import UserProfile from "../../components/UserProfile/UserProfile";

class user extends Component {
  state = {
    profile: {},
    posts: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.id;
    console.log(handle);
    axios
      .get(`http://localhost:5000/users/me/${handle}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ profile: res.data });
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/tasks/profile/${handle}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
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
          <UserProfile userProfile={this.state.profile} />
        </Grid>
      </Grid>
    );
  }
}

export default user;
