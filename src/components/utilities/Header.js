import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./css/Header.css"

const headersData = [
    {
        label: "Main",
        href: "/",
    },
    {
        label: "All tasks",
        href: "/all",
    },
    {
        label: "About",
        href: "/about",
    },
];

const logo = (
    <Typography variant="h6" component="h1">
        My way to Leetcode
    </Typography>
);

const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
        return (
            <Button
                key={label}
                color="inherit"
                to = {href}
                component = {RouterLink} >
                {label}
            </Button>
        );
    });
};

export default function Header() {

    const displayDesktop = () => {
        return <Toolbar>
            <div className="toolbar">
            {logo}
            <div>{getMenuButtons()}</div>
            </div>
        </Toolbar>;
    };

    return (
        <header>
            <AppBar className="Header"  >{displayDesktop()}</AppBar>
        </header>
    );
}