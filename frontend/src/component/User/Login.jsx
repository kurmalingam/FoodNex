import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Grid,
  Avatar,
  Alert,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

import { login, clearErrors } from "../../actions/userAction";
import Loader from "../layouts/loader/Loader";
import MetaData from "../layouts/MataData/MataData";
import useStyles from "./LoginFormStyle";

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.userData
  );

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/account";

  useEffect(() => {
    if (error) {
      setAlertMessage(error);
      setAlertSeverity("error");
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, isAuthenticated, error, history, redirect]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const isSignInDisabled = !(email && password && isValidEmail);

  return (
    <>
      <MetaData title="Login" />

      {loading ? (
        <Loader />
      ) : (
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={handleLoginSubmit}>
            <Avatar className={classes.avatar}>
              <LockOpenIcon fontSize="large" />
            </Avatar>

            <Typography className={classes.heading}>
              Sign in to Your Account
            </Typography>

            {alertMessage && (
              <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                {alertMessage}
              </Alert>
            )}

            <TextField
              label="Email"
              fullWidth
              margin="dense"
              className={classes.textField}
              value={email}
              onChange={handleEmailChange}
              error={!isValidEmail && email !== ""}
              helperText={
                !isValidEmail && email !== ""
                  ? "Please enter a valid email address"
                  : ""
              }
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="dense"
              className={classes.textField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    className={classes.showPasswordButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? (
                      <VisibilityOff fontSize="large" />
                    ) : (
                      <Visibility fontSize="large" />
                    )}
                  </IconButton>
                ),
              }}
            />

            <Grid container className={classes.rememberMeContainer}>
              <FormControlLabel
                control={<Checkbox size="large" />}
                label="Remember me"
              />
              <Link
                to="/password/forgot"
                className={classes.forgotPasswordLink}
              >
                Forgot your password?
              </Link>
            </Grid>

            <Typography className={classes.termsAndConditionsText}>
              I accept the FoodNex Terms of Use and acknowledge FoodNex will use my
              information in accordance with its 
              <Link to="/policy/privacy" className={classes.privacyText}>
                Privacy Policy
              </Link>
              .
            </Typography>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.loginButton}
              disabled={isSignInDisabled}
            >
              Sign in
            </Button>

            <Typography align="center" sx={{ mt: 2 }}>
              Don't have an account?
              <Link to="/signup" className={classes.createAccount}>
                Create Account
              </Link>
            </Typography>
          </form>
        </div>
      )}
    </>
  );
}
