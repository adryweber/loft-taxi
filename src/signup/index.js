import React from "react";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { SignUpForm } from "./form/signUpForm";
import { PageTemplateOne } from "../shared/page-template";

import { useStyles } from "../shared/style";

export const SignUp = ({ isLoggedIn }) => {
    const classes = useStyles();

    if (isLoggedIn) {
        return <Redirect to="/map" />;
    }

    return (
        <PageTemplateOne>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h1">
                    Регистрация
                </Typography>
                <div className={classes.formWrapper}>
                    <SignUpForm />
                </div>
                <Typography variant="body2" component="span">
                    <Link href="#">Войдите</Link>, если вы уже зарегистрированы.
                </Typography>
            </Paper>
        </PageTemplateOne>
    );
};
