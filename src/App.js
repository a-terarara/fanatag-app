import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
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
              height: "130px",
              width: "500px"
            }}
          >
            <Grid container style={{ padding: "2px" }}>
              <Grid
                style={{
                  minHeight: "25px",
                  maxHeight: "25px",
                  position: "relative"
                }}
                container
                item
                xs={12}
              >
                <Grid item xs={1} style={{ textAlign: "center" }}>
                  <i className="fa fa-twitter"></i>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={5}>
                  <Typography noWrap style={{ fontSize: "80%" }}>
                    {searchText}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                style={{
                  minHeight: "105px",
                  maxHeight: "105px",
                  position: "relative",
                  backgroundColor: "#ffffff",
                  paddingLeft: "2px"
                }}
                item
                xs={12}
                spacing={3}
              >
                <img
                  src={tweets[0].image_url}
                  style={{ height: "15px", borderRadius: "50%" }}
                />
                <Typography
                  component="span"
                  style={{
                    paddingLeft: "5px",
                    fontWeight: "bold",
                    fontSize: "100%",
                    color: "#000000"
                  }}
                >
                  {tweets[0].name}
                </Typography>
                <Typography
                  component="span"
                  style={{
                    paddingLeft: "5px",
                    fontSize: "70%",
                    color: "#888888"
                  }}
                >
                  {tweets[0].id}
                </Typography>
                <Typography
                  style={{
                    fontSize: "80%",
                    color: "#000000",
                    margin: "4px"
                  }}
                >
                  {tweets[0].text}
                </Typography>
              </Grid>
            </Grid>
          </div>
        ) : (
          ""
        )}
        <br />
        <br />
        <TweetCrawlerBrothers
          searchText={searchText}
          setTimer={setTimer}
          watch={watch}
        />

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
