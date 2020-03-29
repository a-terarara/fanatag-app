const baseUrl = "https://asia-northeast1-fanatag-cdc8c.cloudfunctions.net/api/";

export function fetchTweets(text) {
  return fetch(`${baseUrl}search?text=${encodeURIComponent(text)}`).then(r =>
    r.json()
  );
}
