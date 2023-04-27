import React from "react";

const DevelopmentProcess = ({ title, description, list }) => {
  return (
    <div className="page-template-page-mobile-application-development-services">
      <section className="ui-design">
        <div className="container">
          <div className="section-title">
            {title && <h2 className="title-text titles">{title}</h2>}
            {description && (
              <div className="inner-text mb-5">
                <p>{description}</p>
              </div>
            )}
          </div>
          <div className="row">
            {list?.map((l, index) => {
              return (
                <div className="col-md-6" key={index}>
                  <div className="card card-body">
                    <div className="card-body card-wrapper">
                      <div className="wrapper">
                        <span>
                          {index < 10 ? "0" : null}
                          {index+1}
                        </span>
                        <h4 className="title_sec">{l?.title}</h4>
                      </div>
                      <p className="card-text">{l?.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProcess;
