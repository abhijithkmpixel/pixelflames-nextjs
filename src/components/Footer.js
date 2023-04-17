import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* <!-- end col-12 --> */}
          <div className="col-lg-4 ">
            <figure className="logo">
              {" "}
              <img src="#" alt="image" />{" "}
            </figure>
          </div>
          {/* <!-- end col-5 -->  */}
          <div className="col-lg-4 col-md-6 ">Lorem ipsum dolor sit amet.</div>
          {/* <!-- end col-4 --> */}
          <div className="col-lg-3 offset-lg-1 col-md-6 ">
            Lorem, ipsum dolor.
            <div className="mr-5">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.goodfirms.co/"
              >
                <img
                  style={{ width: 243 }}
                  src="https://assets.goodfirms.co/badges/normal-badge/view-profile.svg"
                  title="View Our Profile on GoodFirms"
                  alt="View Our Profile on GoodFirms"
                />
              </a>
            </div>
          </div>
          {/* <!-- end col-3 -->
             <?php $quicklinktitle = get_field("quick_links_title",'options');
              if($quicklinktitle):
             ?> */}
          <div className="col-12 ">
            <div className="sub-footer mt-4">
              <h5>Lorem, ipsum.</h5>

              {/* <?php if( have_rows('footer_quick_links','options') ): ?> */}
              <ul className="quicK_links">
                {/* <?php while( have_rows('footer_quick_links','options') ): the_row(); 
                                $permalink = get_sub_field('quicklink_permalink');
                                $link_url = $permalink['url'];
                                $link_title = $permalink['title'];
                                $link_target = $permalink['target'] ? $permalink['target'] : '_self';                              
                                ?> */}
                <li>
                  <a
                    href="<?php echo esc_url( $link_url ); ?>"
                    target="<?php echo esc_attr( $link_target ); ?>"
                  >
                    asdadasdasdsd
                  </a>
                </li>
                {/* <?php endwhile; ?> */}
              </ul>
              {/* <?php endif; ?> */}
            </div>
          </div>
          {/* <?php endif;?>
        <!-- end col-3 --> */}
          <div className="col-12 ">
            <div className="sub-footer">
              {/* <?php wp_nav_menu( array(
            'container' => false,
            'menu' => 'Footer_navigation', 
            'theme_location' => 'Footer',
            'menu_class'     => 'Footer-link',
            ) ); 
            ?> */}
              <span>
                {" "}
                2023 Pixelflames Technologies Pvt Ltd - All rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
