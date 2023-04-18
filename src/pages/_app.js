import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        document.querySelector("body").classList.add("sticky_header");
      } else {
        document.querySelector("body").classList.remove("sticky_header");
      }
    });
  }
  return (
    <>
      {/* <Header /> */}
      {/* <StickyHeader stickyHeader={true} /> */}

      <main className="scroller_container">
        <Component {...pageProps} />
      </main>
    </>
  );
}
