import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import CrawlerSpanDropdown from "./components/crawler_span_dropdown";
import TweetCrawlerBrothers from "./components/tweet_crawler_brothers";
import { fetchTweets } from "./service/twitter";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    backgroundColor: "transparent !important",
    color: "#ffffff"
  }
}));

function App() {
  const classes = useStyles();

  const [tweets, setTweets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [timer, setTimer] = useState(0);
  const [watch, setWatch] = useState("");
  const [span, setSpan] = useState(6000);
  const spanList = [6, 10, 15, 30];

  useEffect(() => {
    if (!searchText) return;
    if (timer > 0) {
      fetchTweets(searchText).then(json => {
        setTweets([json[0]]);
      });
      setWatch(
        setInterval(() => {
          fetchTweets(searchText).then(json => {
            setTweets([json[0]]);
          });
        }, span)
      );
    }
  }, [timer]);

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <br />
        {tweets.length > 0 ? (
          <div
            style={{
              backgroundColor: "#1da1f3",
              height: "100px",
              width: "500px",
              borderRadius: "0.6em"
            }}
          >
            <Grid container style={{ padding: "2px" }}>
              <Grid
                style={{
                  minHeight: "70px",
                  maxHeight: "70px",
                  position: "relative"
                }}
                item
                xs={12}
                spacing={3}
              >
                <Typography style={{ fontSize: "80%" }}>
                  {tweets[0].text}
                </Typography>
              </Grid>
              <Grid
                style={{
                  minHeight: "30px",
                  maxHeight: "30px",
                  position: "relative",
                  borderTop: "1px dotted #fff"
                }}
                container
                item
                xs={12}
              >
                <Grid item xs={1} style={{ textAlign: "center" }}>
                  <i className="fa fa-twitter"></i>
                </Grid>
                <Grid item xs={5}>
                  <Typography noWrap>{tweets[0].name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography noWrap style={{ fontSize: "80%" }}>
                    {searchText}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          ""
        )}
        <br />
        <br />
        <TweetCrawlerBrothers setTimer={setTimer} watch={watch} />

        <br />
        <br />
        <TextField
          id="filled-basic"
          style={{ backgroundColor: "#ffffff" }}
          label="クロールしたい文字列"
          variant="filled"
          value={searchText}
          disabled={timer > 0}
          onChange={e => setSearchText(e.target.value)}
        />
        <br />

        {timer > 0 ? (
          ""
        ) : (
          <CrawlerSpanDropdown spanList={spanList} setSpan={setSpan} />
        )}
      </header>
    </div>
  );
}

export default App;
