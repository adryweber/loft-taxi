import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { SignUpForm } from "./signUpForm";
import { PageTemplateOne } from "../shared/page-template";

import { useStyles } from "../shared/style";

export const SignUp = ({ setPage }) => {
    const classes = useStyles();

    return (
        <PageTemplateOne>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h1">
                    Регистрация
                </Typography>
                <div className={classes.formWrapper}>
                    <SignUpForm setPage={setPage} />
                </div>
                <Typography variant="body2" component="span">
                    <Link href="#" onClick={() => setPage("login")}>
                        Войдите
                    </Link>
                    , если вы уже зарегистрированы.
                </Typography>
            </Paper>
        </PageTemplateOne>
    );
};
