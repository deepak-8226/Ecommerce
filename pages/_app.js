import { Provider } from "react-redux";
import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import store, { presistor } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Head from "next/head";
import "swiper/css/bundle";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </Head>
      <div>
        <Provider store={store}>
          <PersistGate persistor={presistor} loading={null}>
            <Helmet>
              <title>Shopping ecart</title>
              <meta
                name="description"
                content="Get info your favriote product "
              />
            </Helmet>
            <Navbar />
            <ToastContainer />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default MyApp;
