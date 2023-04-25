// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const { slug } = req.query;

  const data = await axios
    .get(`${process.env.API_URL}/api/services?filters[slug][$eq]=${slug}&populate[0]=main_image&populate[1]=features&populate[2]=features.body&populate[3]=service_details&populate[4]=get_in_touch_button&populate[5]=related_projects&populate[6]=related_projects.listing_image&populate[7]=seo&populate[8]=seo.seo_image`)
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
