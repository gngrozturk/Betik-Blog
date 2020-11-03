import Head from "next/head";
import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import styles from "./slug.module.css";
import Markdown from "markdown-to-jsx";
import Moment from "moment";

function ArticleDetail({ article }) {
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
        <title>{article.title}</title>
        <meta name="keywords" content={article.keywords}></meta>
        <meta name="description" content={article.title}></meta>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <Container className="my-4">
        <Row className={styles.abstract}>
          <Col lg={10}>
            <h1 className={styles.titles}>{article.title}</h1>
            <hr className={styles.line} />

            <Image fluid src={article.banner.name} width="100%" />
            <Col>
              <Row className={styles.articleIntro}>
                <h5>
                  {article.created_by.firstname +
                    " " +
                    article.created_by.lastname +
                    " | "}
                    {Moment(article.date).format('DD.MM.YYYY')} 
                </h5>

                <div className={styles.share}>
                  <a
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    class="twitter-share-button"
                    data-show-count="false"
                    data-size="large"
                    data-via="betikblog"
                    data-hashtags={article.keywords}
                  >
                    Tweet
                  </a>
                </div>
              </Row>
            </Col>
          </Col>
        </Row>

        <Row className={styles.content}>
          <Col lg={9}>
            <Markdown className={styles.text}>{article.content}</Markdown>

            <div id="disqus_thread"></div>
            <br />
            <a
              className={styles.btnGrad}
              href={`../../${article.created_by.username}`}
              role="button"
              aria-pressed="true"
            >
              Diğer Yazıları Görüntüle <i class="fas fa-chevron-right"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  const data = await unfetch("https://betikblog.herokuapp.com/articles/" + id);

  const article = await data.json();

  return {
    props: {
      article,
    },
  };
}

export default ArticleDetail;
