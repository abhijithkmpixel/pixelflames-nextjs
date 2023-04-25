import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// NProgress.configure({ showSpinner: false ,parent: '#loader'});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
          document.querySelector("body").classList.add("sticky_header");
        } else {
          document.querySelector("body").classList.remove("sticky_header");
        }
      });
    }

    if (typeof window !== "undefined") {
      Router.events.on("routeChangeStart", () => {
        document.querySelector(".pre_loader").classList.add("loading");
        document.querySelector("body").classList.add("overflow-hidden");
      });
      Router.events.on("routeChangeComplete", () => {
        document.querySelector(".pre_loader").classList.remove("loading");
        document.querySelector("body").classList.remove("overflow-hidden");
      });
    }
    // Router.events.on("routeChangeStart", () => NProgress.start());
    // Router.events.on("routeChangeComplete", () => NProgress.done());
    // Router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      // Router.events.off("routeChangeStart", () => NProgress.start());
      // Router.events.off("routeChangeComplete", () => NProgress.done());
      // Router.events.off("routeChangeError", () => NProgress.done());
    };
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <StickyHeader stickyHeader={true} /> */}
      <div className="pre_loader">
        <img src="/images/logo.png" alt="pixelflames logo" />
        <div className="loader" id="loader">
          <span></span>
        </div>
      </div>
      <main className="scroller_container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
