import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Today from "./PolandComponents/Today";
import Total from "./PolandComponents/Total";
import PolandChart from "./PolandComponents/PolandChart";

let intervalId = null;


const Poland = () => {

  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [count, setCount] = useState(299);

  if (count > 300) {
    fetch("https://corona-api.com/countries/PL")
      .then(r => r.json())
      .then((res) => {
        setStats(res.data);
        setLoading(false);  
        setTimeline(res.data.timeline);     
      }).catch(err => {
        console.error(err);
      });
    setCount(0);
  }

  useEffect(() => {
    intervalId = setInterval(() => {
      setCount(prevCount => {
        return prevCount + 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <Grid container>
          <Grid item xs={12} md={3}>
            <Total stats={stats} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Today stats={stats} />
            <PolandChart timeline={timeline} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Poland;
