import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "antd/dist/reset.css";
import Image from "next/image";
import "@/assets/styles/styles.min.css";
import "@/assets/styles/maintenance.css";
import "@/assets/styles/custom-styles.css";
import "@/assets/styles/custom_wp.css";
import "@/assets/styles/custom.css";
import "@/assets/styles/revamp.css";
import "@/styles/globals.css";
// NProgress.configure({ showSpinner: false ,parent: '#loader'});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== undefined) {
      setTimeout(() => {
        document.querySelector(".pre_loader").classList.remove("loading");
      }, 2000);
      document.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
          document.querySelector("body").classList.add("sticky_header");
        } else {
          document.querySelector("body").classList.remove("sticky_header");
        }

        let h = document.documentElement,
          b = document.body,
          st = "scrollTop",
          sh = "scrollHeight";

        let percent =
          ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
        if (percent > 70) {
          document.querySelector(".scroll_to_top").classList.add("opacity-1");
        } else {
          document
            .querySelector(".scroll_to_top")
            .classList.remove("opacity-1");
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
      <div className="pre_loader loading">
        <Image
          src="/images/logo.png"
          alt="pixelflames logo"
          width={250}
          height={67}
          priority
        />
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
