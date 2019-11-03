import React from "react";
import { Consumer } from "../shared/auth-context";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../shared/style";

export const LoginForm = ({ setPage }) => {
    //const [fields, setFields] = React.useState({ email: "", password: "" });
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [invalid, setInvalid] = React.useState(false);

    const classes = useStyles();

    const onSubmit = login => e => {
        e.preventDefault();
        login(email, password);
        setInvalid(true);
    };

    const InvalidMessage = () => {
        if (!invalid) {
            return null;
        }
        return (
            <Typography id="textError" variant="body2" component="span">
                Неправильные логин и пароль.
            </Typography>
        );
    };

    const changeEmail = e => {
        setInvalid(false);
        setEmail(e.target.value);
    };

    const changePassword = e => {
        setInvalid(false);
        setPassword(e.target.value);
    };

    // const handleChange = e => {
    //     // setInvalid(false);
    //     setFields({ [e.target.name]: e.target.value });
    // };

    return (
        <Consumer>
            {({ isLoggedIn, login }) => (
                <form id="formLogin" onSubmit={onSubmit(login)}>
                    <InvalidMessage />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        label="Эл. почта"
                        margin="normal"
                        name="email"
                        value={email}
                        onChange={changeEmail}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        label="Пароль"
                        margin="normal"
                        name="password"
                        value={password}
                        onChange={changePassword}
                    />
                    <Button
                        className={classes.formBottomButton}
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            )}
        </Consumer>
    );
};
