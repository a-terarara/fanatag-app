const baseUrl = "http://localhost:8080/";

export function fetchTweets(text) {
  return fetch(`${baseUrl}search?text=${encodeURIComponent(text)}`).then(r =>
    r.json()
  );
}
