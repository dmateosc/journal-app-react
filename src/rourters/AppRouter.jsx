import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { firebase } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={AuthRouter} />

            <Route exact path="/" component={JournalScreen} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
      {/*
                path=/auth
                No es exact
                component={AuthRouter}
            */}

      {/*
                Main Route
                exact
                path="/"
                component={JournalScreen}
            */}
    </div>
  );
};
