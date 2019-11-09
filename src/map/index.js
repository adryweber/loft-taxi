import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { MapBG } from "../shared/map-bg";
import { OrderForm } from "./orderForm";

import { useStyles } from "../shared/style";

export const Map = () => {
    const classes = useStyles();

    return (
        <>
            <MapBG />
            <div className={classes.rootWrapper}>
                <div className={classes.pageRoot}>
                    <Grid container spacing={4}>
                        <Grid item xs={5}>
                            <Paper className={classes.paper}>
                                <div className={classes.formWrapper}>
                                    <OrderForm />
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
};
