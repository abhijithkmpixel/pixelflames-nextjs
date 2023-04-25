// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const { slug } = req.query;

  const data = await axios
    .get(`${process.env.API_URL}/api/portfolios?filters[slug][$eq]=${slug}&populate[0]=external_site_link&populate[1]=page_builder&populate[2]=portfolio_banner_image&populate[3]=page_builder.rows&populate[4]=page_builder.image&populate[5]=page_builder.image.image&populate[6]=page_builder.title&populate[7]=page_builder.description&populate[8]=page_builder.side_image&populate[9]=seo&populate[10]=seo.seo_image`)
    .then(function (response) {
      // handle success
      return response?.data?.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return null;
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
      return null;
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
      return null;
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
