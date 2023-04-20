import React from "react";

const PageHeader = ({image}) => {
  return (
    <section className="page-header">
      <div className="video-bg">
        <picture>
          <img src={image} />
        </picture>
      </div>
    </section>
  );
};

export default PageHeader;
