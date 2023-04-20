import Link from "next/link";
import React from "react";

const PortfolioListCard = ({ title, description, image, client, slug }) => {
  return (
    <div className="project-box">
      <figure className="project-image">
        <Link href={`/project/${slug}`}>
          <picture>
            <img src={image} alt={title} />
          </picture>
        </Link>
      </figure>
      <div className="project-content">
        <h3>
          <Link href={`/project/${slug}`}>{title} </Link>
        </h3>
        <h6> Client : {client}</h6>

        <small>
          {/* <?php
                            foreach ( $term_list as $term) {
                              if(next($term_list)) {
                             
                                echo $term->name.' | '; 
                              }
                                 // This is the last $element
                              elseif(!next($term_list))
                              {
                                echo $term->name;
                              }
                            ?> 
                        <?php } ?>  */}
        </small>
        {description && <span>{description}</span>}
      </div>
    </div>
  );
};

export default PortfolioListCard;
