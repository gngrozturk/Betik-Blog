import Head from "next/head";
import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import Markdown from "markdown-to-jsx";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styles from "./guest.module.css";

function ArticleDetail({ guestarticle }) {
  return (
    <Layout>
      <Head>
        <title>{guestarticle.guesttitle}</title>
        <meta name="keywords" content={guestarticle.guestkeywords}></meta>
        <meta name="description" content={guestarticle.guesttitle}></meta>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <Container className="my-5">
        <Row className={styles.abstract}>
          <Col lg={10}>
            <h1 className={styles.titles}>{guestarticle.guesttitle}</h1>
            <hr className={styles.line} />
            <Image fluid src={guestarticle.guestbanner.name} width="100%" />

            <div className={styles.share}>
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button"
                data-show-count="false"
                data-size="large"
                data-via="betikblog"
                data-hashtags={guestarticle.keywords}
              >
                Tweet
              </a>
            </div>
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col lg={9}>
            <Markdown className={styles.text}>
              {guestarticle.guestcontent}
            </Markdown>
            <p className={styles.publishDate}>{guestarticle.guestdate}</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfetch("https://betikblog.herokuapp.com/guestarticles");
  const guestarticles = await data.json();
  return {
    paths: guestarticles.map((guestarticle) => {
      return {
        params: {
          guestslug: `${slug(guestarticle.guesttitle)}-${guestarticle.id}`,
        },
      };
    }),

    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.guestslug.split("-").slice(-1)[0];
  const data = await unfetch("https://betikblog.herokuapp.com/guestarticles/" + id);

  const guestarticle = await data.json();

  return {
    props: {
      guestarticle,
    },
  };
}

export default ArticleDetail;
