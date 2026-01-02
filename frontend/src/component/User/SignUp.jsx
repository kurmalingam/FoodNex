import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  Grid,
  Typography,
  Alert,
  IconButton,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import Loader from "../layouts/loader/Loader";
import MetaData from "../layouts/MataData/MataData";
import { signUp, clearErrors } from "../../actions/userAction";
import useStyles from "./LoginFormStyle";

function Signup() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthenticated, error } = useSelector(
    (state) => state.userData
  );

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error");

  const [areCheckboxesChecked, setAreCheckboxesChecked] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  useEffect(() => {
    if (error) {
      setAlertMessage(error);
      setAlertSeverity("error");
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/account");
    }
  }, [dispatch, isAuthenticated, error, history]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCheckboxChange = (name) => (e) => {
    setAreCheckboxesChecked((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
  };

  const isSignUpDisabled = !(
    name &&
    email &&
    password &&
    confirmPassword &&
    isValidEmail &&
    isValidName &&
    isValidPassword &&
    areCheckboxesChecked.checkbox1 &&
    areCheckboxesChecked.checkbox2
  );

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setAlertMessage("Password and Confirm Password do not match");
      setAlertSeverity("error");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(signUp(formData));
    setLoading(false);
  };

  return (
    <>
      <MetaData title="Sign Up" />

      {loading ? (
        <Loader />
      ) : (
        <div className={classes.formContainer}>
          <form className={classes.form} onSubmit={handleSignUpSubmit}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon fontSize="large" />
            </Avatar>

            <Typography className={classes.heading}>
              Create Your Account
            </Typography>

            {alertMessage && (
              <Alert severity={alertSeverity} sx={{ mb: 2 }}>
                {alertMessage}
              </Alert>
            )}

            <TextField
              label="Name"
              fullWidth
              margin="dense"
              className={classes.textField}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setIsValidName(e.target.value.length >= 4);
              }}
              error={!isValidName && name !== ""}
              helperText={
                !isValidName && name !== ""
                  ? "Name must be at least 4 characters"
                  : ""
              }
            />

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
                  ? "Enter a valid email address"
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
              onChange={(e) => {
                setPassword(e.target.value);
                setIsValidPassword(e.target.value.length >= 8);
              }}
              error={!isValidPassword && password !== ""}
              helperText={
                !isValidPassword && password !== ""
                  ? "Minimum 8 characters"
                  : ""
              }
              inputProps={{
                autoComplete: "new-password",
              }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    className={classes.showPasswordButton}
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

            <TextField
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="dense"
              className={classes.textField}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              inputProps={{
                autoComplete: "new-password",
              }}
            />

            <div className={classes.root}>
              <Avatar src={avatarPreview} className={classes.avatar2} />
              <input
                accept="image/*"
                type="file"
                className={classes.input}
                id="avatar-input"
                onChange={handleAvatarChange}
              />
              <label htmlFor="avatar-input">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.uploadAvatarButton}
                  startIcon={<CloudUploadIcon fontSize="large" />}
                >
                  Upload Avatar
                </Button>
              </label>
            </div>

            <Grid container direction="column">
              <FormControlLabel
                control={<Checkbox size="large" />}
                label="I accept Terms & Conditions"
                checked={areCheckboxesChecked.checkbox1}
                onChange={handleCheckboxChange("checkbox1")}
              />
              <FormControlLabel
                control={<Checkbox size="large" />}
                label="I accept Terms of Use"
                checked={areCheckboxesChecked.checkbox2}
                onChange={handleCheckboxChange("checkbox2")}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"   
              fullWidth
              className={classes.loginButton}
              disabled={isSignUpDisabled}
            >
              Sign Up
            </Button>

            <Typography align="center" sx={{ mt: 2 }}>
              Already have an account?
              <Link to="/login" className={classes.createAccount}>
                Login
              </Link>
            </Typography>
          </form>
        </div>
      )}
    </>
  );
}

export default Signup;
