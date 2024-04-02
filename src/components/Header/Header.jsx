import * as React from "react";
import { useNavigate } from "react-router-dom";

import { AppBar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    console.log(route);
    navigate(route);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={() => handleNavigation("/articles")} color="inherit">
            Articles
          </Button>
          <Button
            onClick={() => {
              handleNavigation("/politics");
            }}
            color="inherit"
          >
            Politics
          </Button>
          <Button
            onClick={() => {
              handleNavigation("/sports");
            }}
            color="inherit"
          >
            Sports
          </Button>
          <Button
            onClick={() => {
              handleNavigation("/entertainment");
            }}
            color="inherit"
          >
            Entertainment
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
