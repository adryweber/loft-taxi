import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../shared/style";

export const LoginForm = ({ login }) => {
    const [fields, setFields] = React.useState({ email: "", password: "" });
    const [invalid, setInvalid] = React.useState(false);

    const classes = useStyles();

    const onSubmit = login => e => {
        e.preventDefault();
        setInvalid(!login(fields.email, fields.password));
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

    const handleChange = e => {
        setInvalid(false);
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    return (
        <form id="formLogin" onSubmit={onSubmit(login)}>
            <InvalidMessage />
            <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                label="Эл. почта"
                margin="normal"
                name="email"
                value={fields.email}
                onChange={handleChange}
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                label="Пароль"
                margin="normal"
                name="password"
                value={fields.password}
                onChange={handleChange}
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
    );
};
