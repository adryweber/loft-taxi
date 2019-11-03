import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../shared/style";

export const SignUpForm = ({ setPage }) => {
    const classes = useStyles();

    const onSubmit = e => {
        e.preventDefault();
        setPage("profile");
    };

    return (
        <form>
            <TextField fullWidth id="email" label="Эл. почта" margin="normal" />
            <TextField fullWidth id="firstname" label="Имя" margin="normal" />
            <TextField
                fullWidth
                id="lastname"
                label="Фамилия"
                margin="normal"
            />
            <TextField fullWidth id="password" label="Пароль" margin="normal" />
            <Button
                fullWidth
                onClick={onSubmit}
                className={classes.formBottomButton}
                variant="contained"
                color="primary"
            >
                Login
            </Button>
        </form>
    );
};
