import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default function Home(props: any) {
  const { allPostsData } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a MERN Stack Web Deveoper and this is a blog that I made
          following instructions from{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData &&
            allPostsData.map((item: any) => (
              <li className={utilStyles.listItem} key={item.id}>
                <br />
                <Link style={{ color: "blue" }} href={`/posts/${item.id}`}>
                  {item.title}
                </Link>
                <br />
                {item.date}

                <br />
                <br />
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
