import React, { useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import AuthService from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { addUser, selectUser } from "../../../app/slices/AuthSlice";
import Header from "../../../layout/blanklayout/header2/Header";
import { useSelector, useDispatch } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const loggedUser = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_oeeqe78",
  //       "template_adau8hi",
  //       form.current,
  //       "iyB2vlDNkZJLDq3QX"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    AuthService.userLogin(user)
      .then((response) => {
        alert("Login success");
        // console.log("users", loggedUser);
        dispatch(addUser(response.data.data));
        // response.data.data.role = "users"
        //   ? navigate("/")
        // response.data.data.role = "admin" && navigate("/secured");
        navigate("/secured");
      })
      .catch((err) => {
        const message = err.response
          ? err.response.data.message
          : "could not login";
        alert(message);
      });

    // emailjs
    //   .sendForm(
    //     "service_oeeqe78",
    //     "template_adau8hi",
    //     form.current,
    //     "iyB2vlDNkZJLDq3QX"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("email-name", result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // event.target.reset();
  };

  return (
    <>
      <section className="section-top">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <Header />
        <ThemeProvider theme={theme}>
          <Box className="sign-section">
            <Container
              fixed
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                // m: "auto",
              }}
            >
              <CssBaseline />
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  // m: "auto",
                }}
              >
                <Grid item xs={12} md={7} xl={7} sx={{ alignSelf: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="assest/photos/login-img23.png"
                      alt="G-Rank"
                      className="img-fluid  sign-img"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={7} xl={5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Paper
                      className=""
                      sx={{
                        px: 4,
                        py: 8,
                        my: 8,
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          component="h1"
                          variant="h5"
                          className="sign-in-text"
                        >
                          Sign In
                        </Typography>
                      </Box>
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={user.email}
                          onChange={handleChange}
                          autoFocus
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={user.password}
                          onChange={handleChange}
                          autoComplete="current-password"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Sign In
                        </Button>
                        <Grid container>
                          <Grid item xs>
                            <Link href="#" variant="body2">
                              Forgot password?
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              href="/register"
                              variant="body2"
                              color={"#1976d2"}
                            >
                              {"Don't have an account? Sign Up"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Paper>
                  </Box>
                  {/* <Copyright sx={{ mt: 8, mb: 4, display: "none" }} /> */}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </ThemeProvider>
        {/* </form> */}
      </section>
    </>
  );
};

export default Login;
