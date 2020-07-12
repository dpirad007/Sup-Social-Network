import React, { Component } from "react";
import axios from "axios";

//material ui
import { Grid } from "@material-ui/core";

//styles
import styles from "./userpage.module.css";

//compoents
import StoreItemProfile from "../../components/StoreItemProfile/StoreItemProfile";
import UserProfile from "../../components/UserProfile/UserProfile";

class user extends Component {
  state = {
    profile: {},
    projects: [],
    sendername: "",
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

    var token = window.localStorage.getItem("Authentication");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    axios
      .get(`http://localhost:5000/users/me`, config, bodyParameters)
      .then((res) => {
        this.setState({ sendername: res.data.name });
        //console.log(res.data.name);
      })
      .catch((err) => console.log(err));
  }
  deleteButton(_id) {
    var token = window.localStorage.getItem("Authentication");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };
    axios
      .delete(`http://localhost:5000/tasks/${_id}`, config, bodyParameters)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  sendRequest = (senderid, recieverid, username) => {
    const request = {
      senderid: senderid,
      receiverid: recieverid,
      senderusername: username,
    };
    axios
      .post("http://localhost:5000/friend", request)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    let recentPosts = this.state.projects
      ? this.state.projects.map((project) => (
          <StoreItemProfile
            key={project._id}
            product={project}
            deleteButton={this.deleteButton}
            sendRequest={this.sendRequest}
            sendername={this.state.sendername}
          />
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
