import React from "react";

const PortfolioPageBuilder = ({ pageBuilder }) => {
  console.log(pageBuilder);
  return (
    <>
      <section className="case-detail">
        <div className="container">
          <div className="row">
            {pageBuilder?.map((b, index) => {
              if (b.__component == "portfolio.single-column") {
                return (
                  <div className="col-lg-12" key={index}>
                    {b?.title && <h5>{b?.title}</h5>}
                    {b?.description && <div className="content_box" dangerouslySetInnerHTML={{__html:b?.description}}></div>}
                  </div>
                );
              } else if (b?.__component == "portfolio.split-column") {
                return (
                  <div
                    key={index}
                    className="row"
                    style={{ padding: "0 15px", width: "100%" }}
                  >
                    {b?.rows?.map((col, index) => {
                      return (
                        <div className="col-md-6" key={index}>
                          {col?.title && <h6>{col?.title}</h6>}
                          {col?.description && <p>{col?.description}</p>}
                        </div>
                      );
                    })}
                  </div>
                );
              } else if (b?.__component == "portfolio.single-wide-image") {
                return (
                  <div className="col-12" key={index}>
                    <figure>
                      <picture>
                        <img
                          className=" lazyloaded"
                          src={b?.image?.data?.attributes?.url}
                          alt="image"
                        />
                      </picture>
                    </figure>
                  </div>
                );
              } else if (b?.__component == "portfolio.split-image") {
                return (
                  <div
                    className=" row"
                    style={{ padding: "0 15px", width: "auto" }}
                    key={index}
                  >
                    {b?.image?.map((img, index) => {
                      return (
                        <div className="col-lg-6" key={index}>
                          <figure className="split_image">
                            <picture>
                              <img
                                className=" lazyloaded"
                                src={img?.image?.data?.attributes?.url}
                                alt="image"
                              />
                            </picture>
                          </figure>
                        </div>
                      );
                    })}
                  </div>
                );
              } else if (b?.__component == "portfolio.two-column-with-image") {
                return (
                  <div
                    className="row"
                    key={index}
                    style={{ padding: "0 15px", width: "auto" }}
                  >
                    <div className="col-lg-8">
                      {b?.title && <h5>{b?.title}</h5>}
                      {b?.description && <p>{b?.description}</p>}
                    </div>
                    {b?.side_image && (
                      <div className="col-lg-4">
                        <figure className="related_image">
                          <picture>
                            <img
                              className=" lazyloaded"
                              src={b?.side_image?.data?.attributes?.url}
                              alt="image"
                            />
                          </picture>
                        </figure>
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPageBuilder;
