import React from "react";
import { AuthContext } from "../shared/auth-context";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Logo } from "loft-taxi-mui-theme";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

const Menu = () => {
    const classes = useStyles();

    return (
        <AuthContext>
            {({ isLoggedIn }) => (
                <AppBar position="fixed" className={classes.rootWrapper}>
                    <div className={classes.root}>
                        <div className={classes.logo}>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>

                        <Toolbar variant="dense">
                            {isLoggedIn ? (
                                <>
                                    <Link to="/">
                                        <Button>Map</Button>
                                    </Link>
                                    <Link to="/profile">
                                        <Button>Profile</Button>
                                    </Link>
                                    <Link to="/logout">
                                        <Button>Logout</Button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">
                                        <Button>Login</Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button>SignUp</Button>
                                    </Link>
                                </>
                            )}
                        </Toolbar>
                    </div>
                </AppBar>
            )}
        </AuthContext>
    );
};

export { Menu };
