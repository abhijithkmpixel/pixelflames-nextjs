import Head from "next/head";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <section className="page-404 ">
        <div className="container">
          <div className="d-flex justofl-content-center align-items-center flex-column">

          <h1>404</h1>
          <center>
            <h3>Oops! The page you're looking for can't be found.</h3>
            <Link href="/" className="btn btn-danger mt-4">Go to Homepage</Link>
          </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
