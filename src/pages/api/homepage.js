// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const data = await axios
    .get(
      `${process.env.API_URL}/api/homepage?populate[0]=banner_backgound_image&populate[1]=banner_background_image_overlay&populate[2]=banner_cta&populate[3]=banner_cta.href&populate[4]=banner_cta.text&populate[5]=side_image&populate[6]=side_image_link&populate[7]=about_us_side_image&populate[8]=about_get_in_touch_button&populate[9]=our_portfolio_see_all_button&populate[10]=portfolios&populate[11]=portfolios.listing_image&populate[12]=testimonial&populate[13]=digitally_empowered_side_image&populate[14]=marketing_slider&populate[15]=marketing_slider.image`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const readyToBegin = await axios
    .get(`${process.env.API_URL}/api/ready-to-begin?populate=*`)
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const headerData = await axios
    .get(
      `${process.env.API_URL}/api/header?populate[0]=header_logo_white&populate[1]=header_links.link&populate[2]=header_image&populate[3]=header_contact_number&populate[4]=side_image_link&populate[5]=get_in_touch_button&populate[6]=header_popup_image`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data?.attributes;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  const footerData = await axios
    .get(
      `${process.env.API_URL}/api/footer?populate[0]=footer_logo&populate[1]=locations&populate[2]=say_hello&populate[3]=footer_links&populate[4]=links`
    )
    .then(function (response) {
      // handle success
      return response?.data?.data?.attributes;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  res.status(200).json({
    data: data,
    headerData: headerData,
    footerData: footerData,
    readyToBegin: readyToBegin,
  });
}
