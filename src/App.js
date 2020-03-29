import React, { useState, useEffect } from "react";
import "./App.css";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

import CrawlerSpanDropdown from "./components/crawler_span_dropdown";
import TweetCrawlerBrothers from "./components/tweet_crawler_brothers";
import { fetchTweets } from "./service/twitter";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [tweets, setTweets] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [watch, setWatch] = useState("");
  const [span, setSpan] = useState(6000);
  const spanList = [6, 10, 15, 30];

  useEffect(() => {
    if (!searchText) return;
    if (timer > 0) {
      fetchTweets(searchText, password).then(json => {
        if (json.error)
          return setError("認証エラーです。パスワードを確認してください。");
        setTweets([json[0]]);
      });

      setWatch(
        setInterval(() => {
          fetchTweets(searchText, password).then(json => {
            if (json.error)
              return setError("認証エラーです。パスワードを確認してください。");
            setTweets([json[0]]);
          });
        }, span)
      );
    }
  }, [timer]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError("");
    setTimer(0);
    clearInterval(watch);
  };

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
          searchText={searchText + password}
          setTimer={setTimer}
          watch={watch}
        />
        <br />
        <br />
        <TextField
          id="filled-basic"
          component="span"
          style={{ backgroundColor: "#ffffff" }}
          label="クロールしたい文字列"
          variant="filled"
          value={searchText}
          disabled={timer > 0}
          onChange={e => setSearchText(e.target.value)}
        />
        <br />

        <TextField
          id="filled-password-input"
          style={{ backgroundColor: "#ffffff" }}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          disabled={timer > 0}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        {timer > 0 ? (
          ""
        ) : (
          <CrawlerSpanDropdown spanList={spanList} setSpan={setSpan} />
        )}
      </header>

      <Snackbar open={!!error} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
