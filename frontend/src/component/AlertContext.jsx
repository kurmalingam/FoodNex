import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const AlertContext = createContext();

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (message, severity = 'info') => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, message, severity }]);
  };

  const hideAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const error = (message) => showAlert(message, 'error');
  const success = (message) => showAlert(message, 'success');
  const info = (message) => showAlert(message, 'info');
  const warning = (message) => showAlert(message, 'warning');

  return (
    <AlertContext.Provider value={{ error, success, info, warning }}>
      {children}
      {alerts.map(alert => (
        <Snackbar
          key={alert.id}
          open={true}
          autoHideDuration={6000}
          onClose={() => hideAlert(alert.id)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => hideAlert(alert.id)}
            severity={alert.severity}
            sx={{ width: '100%' }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      ))}
    </AlertContext.Provider>
  );
};
