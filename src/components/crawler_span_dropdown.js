import React from "react";

export default function CrawlerSpanDropdown(props) {
  const { spanList, setSpan } = props;

  return (
    <form>
      <ul class="select">
        <li>
          <input
            className="select_close"
            type="radio"
            name="awesomeness"
            id="awesomeness-close"
            value=""
          />
          <span className="select_label select_label-placeholder">
            クロール間隔
          </span>
        </li>

        <li className="select_items">
          <input
            className="select_expand"
            type="radio"
            name="awesomeness"
            id="awesomeness-opener"
          />
          <label className="select_closeLabel" for="awesomeness-close"></label>
          <ul className="select_options">
            {spanList.map(span => {
              return (
                <li className="select_option">
                  <input
                    className="select_input"
                    type="radio"
                    name="awesomeness"
                    id={`awesomeness-${span}`}
                    onClick={() => setSpan(span * 1000)}
                  />
                  <label className="select_label" for={`awesomeness-${span}`}>
                    {span}秒
                  </label>
                </li>
              );
            })}
          </ul>
          <label
            className="select_expandLabel"
            for="awesomeness-opener"
          ></label>
        </li>
      </ul>
    </form>
  );
}
