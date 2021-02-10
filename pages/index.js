import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import axios from "axios";

const testClick = (e) => {
  axios.get("/api/test").then((response) => {
    console.log(response);
  });
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <button onClick={testClick}>Test</button>
      </main>

      <Footer />
    </div>
  );
}
