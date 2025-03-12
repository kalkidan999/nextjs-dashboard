import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps(params) {
  const allPostsData = getSortedPostsData();
  return {
    props: {allPostsData}
  }
  
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    

    </div>
  );
}
