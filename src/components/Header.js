import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core";

const MainMenu = styled("ul")({
  display: "flex",
  padding: "0",
  listStyle: "none",
  justifyContent: "flex-end"
});

const Header = () => {
  return (
    <MainMenu>
      <li>menu</li>
      <li>menu</li>
      <li>menu</li>
    </MainMenu>
  );
};

export default Header;
