import React, { Suspense } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./modules/Login";
// import Layout from "./modules/Layout";
// import Admin from "./components/Admin";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./temaConfig";
import { LayoutPublic, LayoutAdmin } from "./modules/layout";
import {
  PageHome,
  PageHabitaciones,
  PageLogin,
  PageRegister,
  PageAdminDashboard,
} from "./pages";
import RegUser from "./modules/regUser/container/frmRegUser";
import ListBooking from "./modules/booking/container/listbooking";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            <Route
              path="/login"
              name="Login"
              render={() => (
                <LayoutPublic>
                  <PageLogin />
                </LayoutPublic>
              )}
            />
            <Route
              path="/register"
              name="Register"
              render={() => (
                <LayoutPublic>
                  <PageRegister />
                </LayoutPublic>
              )}
            />
               <Route
              path="/habitaciones"
              name="Home"
              render={() => (
                <LayoutPublic>
                  <PageHabitaciones />
                </LayoutPublic>
              )}
            />
         
            <Route
              path="/admin/listBooking"
              name="AdminListBooking"
              render={() => (
                <LayoutAdmin>
                  <ListBooking />
                </LayoutAdmin>
              )}
            />
            <Route
              path="/admin/user"
              name="Adminreguser"
              render={() => (
                <LayoutAdmin>
                  <RegUser />
                </LayoutAdmin>
              )}
            />
            <Route
              path="/admin"
              name="Admin"
              render={() => (
                <LayoutAdmin>
                  <PageAdminDashboard />
                </LayoutAdmin>
              )}
            />
            <Route
              exact
              path="/"
              name="Home"
              render={() => (
                <LayoutPublic>
                  <PageHome />
                </LayoutPublic>
              )}
            />
            {/* <Route exact path="/app" name="Login" render={() => <Login />} />
            <Route exact path="/" name="Layout" render={() => <Layout />} />
            <Route exact path="/admin" name="Admin" render={() => <Admin />} /> */}
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
