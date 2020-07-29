import React, { Component } from "react";
import axios from "axios";

//image
import icon from "../../images/icon.png";

//material ui
import { Grid, Typography, TextField, Button } from "@material-ui/core";

//styles
import styles from "./signup.module.css";

class signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {},
    loading: true,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/users", userData)
      .then((res) => {
        //console.log(res.data);
        this.setState({
          loading: false,
        });

        window.location = "/login";
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
        //console.log(err.response.data);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <Grid container className={styles.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={icon} alt="paperplane" className={styles.icon} />
          <Typography variant="h2" className={styles.pageTitle}>
            Signup
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="name"
              name="name"
              type="text"
              label="Username"
              variant="outlined"
              className={styles.textField}
              helperText={errors._message}
              error={errors._message ? true : false}
              value={this.state.name}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              className={styles.textField}
              helperText={errors._message}
              error={errors._message ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              className={styles.textField}
              helperText={errors._message}
              error={errors._message ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Signup
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

export default signup;
