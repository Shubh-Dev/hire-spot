import React from "react";
import { Typography, CssBaseline, Card, AppBar, CardActions, CardContent, Grid, Toolbar } from "@material-ui/core";

const Header = () => {
    
    const styles = {
        display: "flex",
        justifyContent: "space-between",
    }

    return (
        <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar style={styles}>
                <Typography variant="h6">hireSpot.com</Typography>
                <Typography variant="h6">Sign out</Typography>
            </Toolbar>
        </AppBar> 
        </>
    )
};

export default Header;