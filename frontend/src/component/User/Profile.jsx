import React, { useEffect, useState } from "react";
import { Avatar, Button, Typography, Alert } from "@mui/material";
import { ExitToApp as LogoutIcon, Edit as EditIcon, Lock as LockIcon, ShoppingCart as OrdersIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import MetaData from "../layouts/MataData/MataData";
import { useAlert } from "../AlertContext";

const ProfilePage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useSelector((state) => state.userData);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
    history.push("/login");
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    };
    return new Intl.DateTimeFormat("en-IN", options).format(date);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <MetaData title={`${user.name}'s Profile`} />
      <div className="profile-container">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-welcome">
            <Typography variant="h4" component="h1" className="profile-title">
              Welcome back, {user.name}!
            </Typography>
            <Typography variant="body1" className="profile-subtitle">
              Manage your account and preferences
            </Typography>
          </div>
        </div>

        {/* Main Content */}
        <div className="profile-content">
          {/* Left Sidebar */}
          <div className="profile-sidebar">
            {/* Profile Overview Card */}
            <div className="profile-card">
              <div className="profile-avatar-section">
                <Avatar
                  alt={user.name}
                  src={user.avatar && user.avatar.url ? user.avatar.url : ""}
                  className="profile-avatar"
                />
                <div className="profile-user-info">
                  <Typography variant="h6" className="profile-name">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" className="profile-role">
                    {user.role || "Customer"}
                  </Typography>
                </div>
              </div>

              <div className="profile-details">
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{user.email}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Member since:</span>
                  <span className="detail-value">{formatDate(user.createdAt)}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="profile-card">
              <Typography variant="h6" className="card-title">
                Quick Actions
              </Typography>
              <div className="action-buttons">
                <Link to="/orders" className="action-link">
                  <Button
                    variant="outlined"
                    startIcon={<OrdersIcon />}
                    className="action-button"
                    fullWidth
                  >
                    View Orders
                  </Button>
                </Link>
                <Link to="/profile/update" className="action-link">
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    className="action-button"
                    fullWidth
                  >
                    Edit Profile
                  </Button>
                </Link>
                <Link to="/password/update" className="action-link">
                  <Button
                    variant="outlined"
                    startIcon={<LockIcon />}
                    className="action-button"
                    fullWidth
                  >
                    Change Password
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="profile-main">
            {/* Account Information */}
            <div className="profile-card">
              <Typography variant="h6" className="card-title">
                Account Information
              </Typography>
              <div className="account-info">
                <div className="info-section">
                  <Typography variant="subtitle1" className="section-title">
                    Personal Details
                  </Typography>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Full Name</span>
                      <span className="info-value">{user.name}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email Address</span>
                      <span className="info-value">{user.email}</span>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <Typography variant="subtitle1" className="section-title">
                    Account Security
                  </Typography>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Password</span>
                      <span className="info-value">••••••••</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Account Status</span>
                      <span className="info-value status-active">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Management */}
            <div className="profile-card">
              <Typography variant="h6" className="card-title">
                Account Management
              </Typography>
              <div className="management-section">
                <Typography variant="body2" className="management-text">
                  For security reasons, you may want to log out from all devices.
                  This will require you to sign in again on all your devices.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<LogoutIcon />}
                  onClick={logoutHandler}
                  className="logout-button"
                >
                  Logout from All Devices
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
