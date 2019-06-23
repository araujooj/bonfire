import React, { useState, useEffect, Component } from 'react';
import Routes from "./Services/routes";
import "./styles.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from './firebaseConfig'

const theme = createMuiTheme();

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Routes/>
    </MuiThemeProvider>
  ) : (
    <div id="loader">
      <CircularProgress />
    </div>
  );
}