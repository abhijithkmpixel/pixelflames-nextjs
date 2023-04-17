import React from "react";

const PortfolioListing = () => {
  return (
    <section className="portfolio_listing">
      <div className="container">
        <div className="titles d-flex flex-row align-items-end justify-content-between p-0">
          <h2>asdasddassd</h2>

          {/* <?php if($section2_link) : ?> */}
          <a
            href="<?php echo $section2_link['url'] ?>"
            target="<?php echo $section2_link['target'] ?>"
            className="goto_inner min_990"
          >
            adadasdsadasdda
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
          {/* <?php endif;?> */}
        </div>
        <div className="row porfolio_list_row">
          <a
            href="<?php the_permalink(); ?>"
            className="col-12 col-md-6 col-lg-4 portfolio_list_cards"
          >
            <figure>
              <picture>
                <source
                  srcSet="<?php echo webpUrl($featured_img); ?>"
                  type="image/webp"
                />
                <source
                  srcSet="<?php echo $featured_img; ?>"
                  type="image/jpeg"
                />
                <img
                  src="<?php echo $featured_img; ?>"
                  alt="<?php echo $title; ?>"
                />
              </picture>
            </figure>
            <h5>asdasdadsdsd</h5>
            <span>Client: sara</span>
            {/* <?php $term_list = get_the_terms($post->ID, 'types'); ?> */}
            {/* <!-- <small>     <?php
                foreach ( $term_list as $term) :
                  if(next($term_list)) {
                    echo $term->name.' | '; 
                  }
                  elseif(!next($term_list))
                  {
                    echo $term->name;
                  }
                endforeach;
              ?> </small> --> */}
            <small>Lorem ipsum dolor sit amet.</small>
          </a>
          {/* <?php endforeach; ?>
    <?php wp_reset_postdata(); ?> */}
        </div>
        <a
          href="<?php echo $section2_link['url'] ?>"
          target="<?php echo $section2_link['target'] ?>"
          className="goto_inner max_990"
        >
          asdasdadsdasd
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default PortfolioListing;
