import base64url from "base64url";

const baseUrl = "https://asia-northeast1-fanatag-cdc8c.cloudfunctions.net/api/";

export function fetchTweets(text, password) {
  const headers = {
    Authorization: `Basic ${base64url(password)}`
  };
  return fetch(`${baseUrl}search?text=${encodeURIComponent(text)}`, {
    headers
  }).then(r => r.json());
}
