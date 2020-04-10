import React, { useState } from "react";
import { styled } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  
} from "recharts";

const GreenSwitch = withStyles({
  switchBase: {
    color: green[300],
    "&$checked": {
      color: green[500]
    },
    "&$checked + $track": {
      backgroundColor: green[500]
    }
  },
  checked: {},
  track: {}
})(Switch);

const RedSwitch = withStyles({
  switchBase: {
    color: red[300],
    "&$checked": {
      color: red[500]
    },
    "&$checked + $track": {
      backgroundColor: red[500]
    }
  },
  checked: {},
  track: {}
})(Switch);

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

const PolandChart = ({ timeline }) => {
  const [activeControl, setActiveControl] = useState(true);
  const [deathsControl, setDeathsControl] = useState(true);
  const [recoveredControl, setRecoveredControl] = useState(true);
  timeline.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <PolandBox>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={activeControl}
              onChange={() => {
                setActiveControl(!activeControl);
              }}
              name="activeControlCheckbox"
            />
          }
          label="Zachorowania"
        />
        <FormControlLabel
          control={
            <RedSwitch
              color="primary"
              checked={deathsControl}
              onChange={() => {
                setDeathsControl(!deathsControl);
              }}
              name="deathsControlCheckbox"
            />
          }
          label="Zgony"
        />
        <FormControlLabel
          control={
            <GreenSwitch
              color="primary"
              checked={recoveredControl}
              onChange={() => {
                setRecoveredControl(!recoveredControl);
              }}
              name="recoveredControlCheckbox"
            />
          }
          label="Wyleczenia"
        />
      </div>
      <div style={{ marginTop: "10px", width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={timeline}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            {activeControl ? (
              <Line
                dot={false}
                type="monotone"
                dataKey="new_confirmed"
                stroke="blue"
              />
            ) : null}
            {deathsControl ? (
              <Line
                dot={false}
                type="monotone"
                dataKey="new_deaths"
                stroke="coral"
              />
            ) : null}
            {recoveredControl ? (
              <Line
                dot={false}
                type="monotone"
                dataKey="new_recovered"
                stroke="lightgreen"
              />
            ) : null}

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </PolandBox>
  );
};

export default PolandChart;
