import React from "react";
import { Typography, CssBaseline, Card, AppBar, CardActions, CardContent, Grid, Toolbar } from "@material-ui/core";

const Header = () => {
    return (
        <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6">hireSpot.com</Typography>

            </Toolbar>
        </AppBar> 
        </>
    )
};

export default Header;