import React from "react";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { MCIcon } from "loft-taxi-mui-theme";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { makeStyles } from "@material-ui/core/styles";
import { useStyles as outStyle } from "../../shared/style";

const useStyles = makeStyles(theme => ({
    cardsWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: `${theme.spacing(4)}px 0`
    },
    card: {
        position: "relative",
        width: 380,
        height: 200,
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,

        "& + &": {
            marginLeft: theme.spacing(6)
        }
    },
    shortField: {
        width: 130,
        position: "relative"
    },
    icoHelp: {
        position: "absolute",
        right: -40,
        bottom: 5
    },
    button: {
        width: 200
    }
}));

export const CardForm = () => {
    const classes = { ...useStyles(), ...outStyle() };

    const onSubmit = e => {
        // e.preventDefault();
        // setPage("profile");
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={classes.cardsWrapper}>
                <Paper elevation={8} className={classes.card}>
                    <TextField
                        id="cardNumber"
                        label="Номер карты"
                        margin="normal"
                    />
                    <div className={classes.shortField}>
                        <TextField
                            id="expire"
                            label="Срок действия"
                            margin="normal"
                        />
                    </div>
                    <MCIcon />
                </Paper>
                <Paper elevation={8} className={classes.card}>
                    <TextField
                        id="holderName"
                        label="Имя владельца"
                        margin="normal"
                    />
                    <div className={classes.shortField}>
                        <TextField id="cvc" label="CVC" margin="normal" />
                        <Tooltip
                            title="3 последние цифры на оборотной стороне карты"
                            className={classes.icoHelp}
                        >
                            <HelpOutlineIcon color="primary" />
                        </Tooltip>
                    </div>
                </Paper>
            </div>

            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="large"
            >
                Сохранить
            </Button>
        </form>
    );
};
