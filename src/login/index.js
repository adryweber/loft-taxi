import React from "react";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { PageTemplateOne } from "../shared/page-template";
import { LoginForm } from "./form/loginForm";

import { useStyles } from "../shared/style";

export const Login = ({ isLoggedIn, login }) => {
    const classes = useStyles();

    if (isLoggedIn) {
        return <Redirect to="/map" />;
    }

    return (
        <PageTemplateOne>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h1">
                    Войти
                </Typography>
                <div className={classes.formWrapper}>
                    <LoginForm login={login} />
                </div>
                <Typography variant="body2" component="span">
                    Пройдите <Link href="#">на регистрацию</Link>, если вы
                    в первый раз.
                </Typography>
            </Paper>
        </PageTemplateOne>
    );
};
