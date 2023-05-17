import Image from "next/image";
import React from "react";

const PageHeader = ({ image }) => {
  return (
    <section className="page-header">
      <div className="video-bg">
        <picture>
          <Image
            src={image}
            width={1920}
            height={760}
            priority
            alt="featured banner image"
          />
        </picture>
      </div>
    </section>
  );
};

export default PageHeader;
