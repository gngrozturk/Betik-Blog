import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import qs from "qs";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import styles from "./username.module.css";
import Col from "react-bootstrap/Col";
import Moment from "moment";

function ArticleDetail({ articles }) {
  return (
    <Layout>
      <Head>
        {articles.map((article) => (
          <title>
            {article.created_by.firstname + " " + article.created_by.lastname}
          </title>
        ))}
      </Head>
      <Container className="my-5">
        <Row className={styles.contentCenter}>
          {articles.slice(0, 1).map((article) => (
            <h1 className={styles.titleCenter}>
              {article.created_by.firstname + " " + article.created_by.lastname}
            </h1>
          ))}
        </Row>
        <Row>
          {articles.map((article) => (
            <Col sm={3} md={6} lg={3} className="my-2">
              <Link
                href="/article/[slug]"
                as={`/article/${slug(article.title)}-${article.id}`}
              >
                <Card key={article.id} className={styles.cardGeneral}>
                  <Card.Img
                    className={styles.cardImg}
                    variant="top"
                    src={article.banner.name}
                  />
                  <Card.Body>
                    <h2 className={styles.cardTitle}>{article.title}</h2>
                    <br />
                    <h5>
                      {article.created_by.firstname +
                        " " +
                        article.created_by.lastname}
                    </h5>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <i class="far fa-clock"></i>{" "}
                      {Moment(article.date).format("DD.MM.YYYY")}
                    </small>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch(
    "https://betikblog.herokuapp.com/articles?_sort=created_at:DESC"
  );
  const articles = await data.json();

  return {
    paths: articles.map((article) => {
      return { params: { username: `${article.created_by.username}` } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const username = params.username;
  const query = qs.stringify({
    _where: [{ "created_by.username": username }],
    _sort: "created_at:DESC",
  });
  const data = await unfetch(
    `https://betikblog.herokuapp.com/articles?${query}`
  );

  const articles = await data.json();

  return {
    props: {
      articles,
    },
  };
}

export default ArticleDetail;
