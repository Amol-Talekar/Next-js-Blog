import Link from "next/link";
import Image from "next/image";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <div>
        <p>First Post</p>
        <div style={{ border: "1px solid black" }}>
          <Image
            src="/images/Lamborghini.jpg"
            alt={"Lamborghini"}
            height={480}
            width={720}
          />
        </div>

        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default FirstPost;
