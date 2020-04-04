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

const ActieDiv = styled("div")({
  background: "gold",
  textAlign: "center",
  padding: "5px 0"
});

const Total = ({ stats }) => {
  return (
    <PolandBox>
      <h2>Ogólnie</h2>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={3} md={12}>
          <NewDiv>
            <p>Zarażonych:</p>
            <Value>{stats.latest_data.confirmed}</Value>
          </NewDiv>
        </Grid>
        <Grid item xs={12} sm={3} md={12}>
          <DeathsDiv>
            <p>Zgonów:</p>
            <Value>{stats.latest_data.deaths}</Value>
          </DeathsDiv>
        </Grid>
        <Grid item xs={12} sm={3} md={12}>
          <RecoveredDiv>
            <p>Wyleczonych:</p>
            <Value>{stats.latest_data.recovered}</Value>
          </RecoveredDiv>
        </Grid>
        <Grid item xs={12} sm={3} md={12}>
          <ActieDiv>
            <p>Nadal chorych:</p>
            <Value>
              {stats.latest_data.confirmed - stats.latest_data.deaths - stats.latest_data.recovered}
            </Value>
          </ActieDiv>
        </Grid>
      </Grid>
    </PolandBox>
  );
};

export default Total;
