import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { MapBG } from "../shared/map-bg";
import { CardForm } from "./cardForm";
import { useStyles } from "../shared/style";

export const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.rootWrapper}>
            <div className={classes.pageRoot}>
                <Grid container spacing={1}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h1">
                                Профиль
                            </Typography>
                            <div className={classes.formWrapper}>
                                <CardForm />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <MapBG />
        </div>
    );
};
