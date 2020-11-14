import Head from "next/head";
import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import Markdown from "markdown-to-jsx";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styles from "./guest.module.css";
import Moment from "moment";
import ArticleHeader from "../../components/article-header";

function ArticleDetail({ guestarticle }) {
  var disqus_config = function () {
    this.page.url = PAGE_URL;
    this.page.identifier = PAGE_IDENTIFIER;
  };

  React.useEffect(() => {
    var d = document,
      s = d.createElement("script");
    s.src = "https://betik.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }, []);

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
      <Container className="my-4">
        <Row className={styles.abstract}>
          <Col lg={10}>
            <h1 className={styles.titles}>{guestarticle.guesttitle}</h1>
            <hr className={styles.line} />
            <Image fluid src={guestarticle.guestbanner.name} width="100%" />
            <ArticleHeader
              title={guestarticle.guesttitle}
              firstname={guestarticle.guestname.split(" ")[0]}
              lastname={guestarticle.guestname.split(" ")[1]}
              content={guestarticle.guestcontent}
              keywords={guestarticle.guestkeywords}
              date={guestarticle.guestdate}
            />
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col lg={9}>
            <Markdown className={styles.text}>
              {guestarticle.guestcontent}
            </Markdown>
            <div id="disqus_thread"></div>

            <noscript>
              Please enable JavaScript to view the{" "}
              <a href="https://disqus.com/?ref_noscript">
                comments powered by Disqus.
              </a>
            </noscript>
            <br />
            <p className={styles.publishDate}>
              {Moment(guestarticle.guestdate).format("DD.MM.YYYY")}{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfetch(
    "https://betikblog.herokuapp.com/guestarticles?_sort=created_at:DESC"
  );
  const guestarticles = await data.json();
  return {
    paths: guestarticles.map((guestarticle) => {
      return {
        params: {guestslug: `${slug(guestarticle.guesttitle)}-${guestarticle.id}`},
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.guestslug.split("-").slice(-1)[0];
  const dataGuest = await unfetch(
    "https://betikblog.herokuapp.com/guestarticles/" + id
  );

  const guestarticle = await dataGuest.json();

  return {
    props: {
      guestarticle,
    },
  };
}

export default ArticleDetail;
