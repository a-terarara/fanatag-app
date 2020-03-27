import React from "react";

export default function TweetCrawlerBrothers(props) {
  const { setTimer, watch } = props;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <button
              className="btn-social-long-twitter"
              onClick={() => {
                setTimer(1);
              }}
            >
              <i className="fa fa-twitter"></i> <span>ツイート取得</span>
            </button>
          </td>
          <td></td>
          <td>
            <button
              className="btn-social-long-twitter"
              onClick={() => {
                setTimer(0);
                clearInterval(watch);
              }}
            >
              <span>取得キャンセル</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
