import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { PageTemplateOne } from "../shared/page-template";
import { LoginForm } from "./loginForm";

import { useStyles } from "../shared/style";

export const Login = ({ setPage }) => {
    const classes = useStyles();

    return (
        <PageTemplateOne>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h1">
                    Войти
                </Typography>
                <div className={classes.formWrapper}>
                    <LoginForm setPage={setPage} />
                </div>
                <Typography variant="body2" component="span">
                    Пройдите{" "}
                    <Link href="#" onClick={() => setPage("signup")}>
                        на регистрацию
                    </Link>
                    , если вы в первый раз.
                </Typography>
            </Paper>
        </PageTemplateOne>
    );
};
