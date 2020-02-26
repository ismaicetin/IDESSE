import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router } from "react-router-dom";
import "./app.css"
import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import AdminNavbar from "./components/Navbars/AdminNavbar";
import DefaultRoutes from "./Router/DefaultRoutes";
import LoginContext from "./context/LoginContext"
import { SnackbarProvider, useSnackbar } from 'notistack';
import LoginPage from "./views/Default/LoginPage";


const useStyles={
    root:{ height: "100vh", overflow: "auto " },
    snackbar:{ vertical: 'bottom',  horizontal: 'right', },
    routerr:{ width: "100%", minHeight: "80vh" },
  }

function App() {
    const hist = createBrowserHistory();
    const currentUser = sessionStorage.getItem("login");
    if (currentUser == null && window.location.pathname !== "/") {
        window.location.href = '/';
    } 
    return (
        <div style={useStyles.root}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={useStyles.snackbar}>
                <LoginContext>
                    <Router history={hist}>
                        {currentUser == null ? <Route exact path="*"  component={LoginPage} /> :
                            <>
                                <AdminNavbar color="info" brandText="esai" />
                                <div style={useStyles.routerr}>
                                    <DefaultRoutes />
                                </div>
                            </>
                        }
                    </Router>
                </LoginContext>
            </SnackbarProvider>
        </div>
    )
}
export default App