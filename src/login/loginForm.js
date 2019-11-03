import React from "react";
// import PropTypes from "prop-types";
import { Consumer } from "../shared/auth-context";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { useStyles } from "../shared/style";

// const classes = useStyles();
// console.log(classes);

const InvalidMessage = ({ invalid }) => {
    if (!invalid) {
        return null;
    }
    return (
        <Typography id="textError" variant="body2" component="span">
            Неправильные логин и пароль.
        </Typography>
    );
};

class LoginForm extends React.Component {
    state = { email: "", password: "", invalid: false };

    onSubmit = login => e => {
        e.preventDefault();
        login(this.state.email, this.state.password);
        this.setState({ invalid: true });
    };

    handleChange = e => {
        this.setState({ invalid: false });
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Consumer>
                {({ isLoggedIn, login }) => (
                    <form id="formLogin" onSubmit={this.onSubmit(login)}>
                        <InvalidMessage invalid={this.state.invalid} />
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            label="Эл. почта"
                            margin="normal"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            label="Пароль"
                            margin="normal"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <Button
                            // className={classes.formBottomButton}
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
    }
}

export { LoginForm };
