import axios from "axios";
import React, { useEffect } from "react";

const ReadyToBegin = ({ readyToBegin }) => {
  return (
    <div className="full_width_blockquote  ready_to_begin">
      <div className="body_content container">
        <span>{readyToBegin?.attributes?.subtitle}</span>
        <h3>{readyToBegin?.attributes?.title}</h3>
        {readyToBegin?.attributes?.cta && (
          <div className="custom-btn">
            <a href={readyToBegin?.attributes?.cta?.href} target="_self">
              {readyToBegin?.attributes?.cta?.text}
              <span></span> <i></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadyToBegin;
