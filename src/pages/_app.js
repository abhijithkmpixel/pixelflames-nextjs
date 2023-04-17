import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyHeader from "@/components/StickyHeader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="scroller_container">
        <StickyHeader />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
