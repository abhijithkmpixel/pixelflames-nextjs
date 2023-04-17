import React from "react";

const Offgrid = () => {
  return (
    <section className="off_grid_column" data-scroll data-scroll-repeat>
      <div className="container">
        {/* 
    <?php while( have_rows('digital_services_details') ): the_row(); ?>
      <?php 
        $digital_row_count = get_row_index();
        $digital_related_image_slider = get_sub_field('digital_related_image_slider'); 
        $digital_title = get_sub_field('digital_title'); 
        $digital_sub_title = get_sub_field('digital_sub_title'); 
        $digital_details = get_sub_field('digital_details'); 
        $related_image_desk = get_sub_field('related_image_desk');
        $related_image_mob = get_sub_field('related_image_mob'); 
      ?>
      <?php if($digital_related_image_slider == 'image') : ?> */}
        <div className="grid_item row">
          <div className="col-lg-7">
            <div className="detail_content ">
              {/* <?php
                if($digital_row_count==2) {
                  echo '<h4>'.$digital_title.'</h4>';
                } else {
                  echo '<h4>'.$digital_title.'</h4>';
                }
              ?> */}
              <h4>asdasd</h4>
              <h5>Digitally empowered businesses</h5>
              Unlock your digital potential faster, better, and more efficient.
            </div>
          </div>
          <div className="col-lg-5">
            {/* <?php if($related_image_desk || $related_image_mob) : ?> */}
            <div
              className="thumbnail_image min_570"
              data-scroll
              data-scroll-speed="2"
            >
              <picture>
                <img
                  src="<?php echo $related_image_desk['url']; ?>"
                  alt="<?php echo $related_image_desk['alt']; ?>"
                />
                <source
                  media="(max-width:990px)"
                  srcSet="<?php echo webpUrl($related_image_mob['url']); ?>"
                  type="image/webp"
                />
                <source
                  media="(max-width:990px)"
                  srcSet="<?php echo $related_image_mob['url']; ?>"
                  type="image/jpeg"
                />
                <source
                  srcSet="<?php echo webpUrl($related_image_desk['url']); ?>"
                  type="image/webp"
                />
                <source
                  srcSet="<?php echo $related_image_desk['url']; ?>"
                  type="image/jpeg"
                />
              </picture>
            </div>
            {/* <?php endif; ?> */}
          </div>
        </div>
        {/* <?php elseif($digital_related_image_slider == 'slider') : ?> */}
        <div className="grid_item row">
          <div className="col-12">
            <div className="container Pading_Reduce">
              <div className="detail_content ">
                {/* <?php
                if($digital_row_count==2) {
                  echo '<h4>'.$digital_title.'</h4>';
                } else {
                  echo '<h4>'.$digital_title.'</h4>';
                }
              ?> */}
                <h4>Lorem, ipsum dolor.</h4> 
                <h5>sdasdasdasdsd</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, culpa.
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="slider">
              <div className="swiper_button_prev">
                <span></span>
              </div>

              {/* <?php if( have_rows('related_slider') ): ?> */}
              <div className="custom_swiper ">
                <div className="swiper-wrapper">
                  {/* <?php $i = 1; ?>
                    <?php while( have_rows('related_slider') ): the_row(); ?>
                      <?php
                        $related_title = get_sub_field('related_title');
                        $related_details = get_sub_field('related_details');
                        $background_image = get_sub_field('background_image');
                      ?> */}
                  <div
                    className="swiper-slide"
                    data-background="<?php echo webpUrl($background_image['url']); ?>"
                  >
                    <div className="slide-inner">
                      <h4>asdasdasdsd</h4>
                      Lorem ipsum dolor sit amet.
                    </div>
                  </div>
                  {/* <?php $i++; ?>
                    <?php endwhile; ?> */}
                </div>
                {/* <?php if($i>2) : ?>
                  <?php endif; ?> */}
              </div>
              {/* <?php endif; ?> */}
              <div className="swiper_button_next">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        {/* <?php endif; ?>
    <?php endwhile; ?> */}
      </div>
    </section>
  );
};

export default Offgrid;
