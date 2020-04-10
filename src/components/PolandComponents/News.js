import React, { useEffect, useState } from "react";
import Parser from 'rss-parser';
import { styled, CardActionArea } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

const Title = styled('h3')({
  fontSize: "1.5rem",
  fontWeight: "400"
});

const Date = styled('p')({
  fontSize: '0.8rem',
  color: "#898988"
})

const Tag = styled('p')({
  fontSize: '0.8rem',
  color: "#898988",
  fontWeight: "bold"
})

const NewsBox = styled("div")({
  "& h2": {
    textAlign: "center"
  },
  boxShadow: "0 0 5px #ddd",
  margin: "15px",
  border: "1px solid #ddd",
  background: "#fff",
  padding: "10px"
});

const News = () => {
  const [news, setNews] = useState([]);
  const [cors, setCors] = useState('https://cors-anywhere.herokuapp.com/')
  const [loadingNews, setLoadingNews] = useState(true);
  useEffect(() => {
    let parser = new Parser();
    (async () => {
      await parser.parseURL(cors + 'https://www.rmf24.pl/fakty/feed', function(err, feed) {
        if (err) throw err;
        feed.items.map(item => {
          item.categories.map(cat => {
            if (cat === "Raport: Koronawirus w Europie" || cat === "Raport: Koronawirus w Polsce" || cat === "Raport: Pandemia koronawirusa") {
              setNews(prevNews => [...prevNews, item]);
              setLoadingNews(false);
            }
          })
        })
      })
    })();
  },[])
  Moment.locale('pl');
  return (
    <NewsBox>
      <h2>Aktualności</h2>
      {!loadingNews ? (
        <Grid container spacing={3}>
        {news.slice(0,20).map((item, index)=> (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <a href={item.link } target="_blank" rel="noopener noreferrer">
            <Card>
              <CardActionArea>
                <CardMedia
                  style={{ height: "200px" }}
                  image={ item.enclosure.url }
                  title={ item.title }
                />
                <CardContent style={{ minHeight: "150px" }}>
                  <Date>{ Moment(item.isoDate).format('DD-MM-YYYY HH:mm') }</Date>
                  {item.categories.map((cat, catIndex) =><Tag key={catIndex}>{cat}</Tag> )}
                  <Title>{item.title}</Title>
                </CardContent>
              </CardActionArea>
            </Card>
            </a>
          </Grid>
        ))}
      </Grid>
      ) : (
        <div style={{ textAlign: "center"}}>
          <CircularProgress />
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        </div>
      )}

    </NewsBox>
  );
};

export default News;
