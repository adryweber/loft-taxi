import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "../shared/style";

export const OrderForm = ({ setPage }) => {
    const classes = useStyles();

    const onSubmit = e => {
        // e.preventDefault();
        // setPage("profile");
    };

    return (
        <form>
            <TextField fullWidth id="from" label="От куда" margin="normal" />
            <TextField fullWidth id="to" label="Куда" margin="normal" />
            <Button
                fullWidth
                onClick={onSubmit}
                className={classes.formBottomButton}
                variant="contained"
                color="primary"
            >
                Вызвать такси
            </Button>
        </form>
    );
};
