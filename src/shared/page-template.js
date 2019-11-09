// Шаблон лейаута для страниц логина/регистрации:
// на фоне фотка города, поверх логотип и место под формы
// авторизации и регистрации (5 колонок)

import React from "react";
import Grid from "@material-ui/core/Grid";

import { Logo } from "loft-taxi-mui-theme";
import bg from "../images/bg-2.jpg";

import { makeStyles } from "@material-ui/core/styles";
import { useStyles as outStyle } from "../shared/style";

const useStyles = makeStyles(theme => ({
    rootWrapperBg: {
        background: `url(${bg}) #2E3234 center/cover`
    },
    logoField: {
        display: "flex",
        lignItems: "center"
    }
}));

export const PageTemplateOne = ({ children }) => {
    const classes = { ...useStyles(), ...outStyle() };
    return (
        <div className={classes.rootWrapper + " " + classes.rootWrapperBg}>
            <div className={classes.pageRoot}>
                <Grid container spacing={4}>
                    <Grid className={classes.logoField} item xs={6}>
                        <Logo white animated />
                    </Grid>
                    <Grid item xs={5}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
