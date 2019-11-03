import React from "react";
import { Consumer } from "../shared/auth-context";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Logo } from "loft-taxi-mui-theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    rootWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white"
    },
    root: {
        flex: 1170,
        maxWidth: 1170,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
}));

const Menu = ({ setPage }) => {
    const classes = useStyles();

    return (
        <Consumer>
            {({ isLoggedIn, logout }) => (
                <AppBar position="fixed" className={classes.rootWrapper}>
                    <div className={classes.root}>
                        <div className={classes.logo}>
                            <Logo />
                        </div>

                        <Toolbar variant="dense">
                            <Button onClick={() => setPage("map")}>Map</Button>
                            <Button onClick={() => setPage("profile")}>
                                Profile
                            </Button>
                            {isLoggedIn ? (
                                <Button onClick={() => logout()}>Logout</Button>
                            ) : (
                                <>
                                    <Button onClick={() => setPage("login")}>
                                        Login
                                    </Button>
                                    <Button onClick={() => setPage("signup")}>
                                        SignUp
                                    </Button>
                                </>
                            )}
                        </Toolbar>
                    </div>
                </AppBar>
            )}
        </Consumer>
    );
};

export { Menu };
