import React from "react";

import { styled } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Value = styled("p")({
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "5px"
});

const PolandBox = styled("div")({
  "& h2": {
    textAlign: "center"
  },
  boxShadow: "0 0 5px #ddd",
  margin: "15px",
  border: "1px solid #ddd",
  background: "#fff",
  padding: "10px"
});

const NewDiv = styled("div")({
  background: "lightgoldenrodyellow",
  textAlign: "center",
  padding: "5px 0"
});

const DeathsDiv = styled("div")({
  background: "coral",
  textAlign: "center",
  padding: "5px 0"
});

const RecoveredDiv = styled("div")({
  background: "lightgreen",
  textAlign: "center",
  padding: "5px 0"
});

const Today = ({ stats }) => {
  return (
    <PolandBox>
      <h2>Dzisiaj</h2>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <NewDiv>
            <p>Nowych przypadków:</p>
            <Value>{stats.today.confirmed || 0}</Value>
          </NewDiv>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DeathsDiv>
            <p>Zgonów:</p>
            <Value>{stats.today.deaths || 0}</Value>
          </DeathsDiv>
        </Grid>
        <Grid item xs={12} sm={4}>
          <RecoveredDiv>
            <p>Wyleczonych:</p>
            <Value>{stats.today.recovered || 0}</Value>
          </RecoveredDiv>
        </Grid>
      </Grid>
    </PolandBox>
  );
};

export default Today;
