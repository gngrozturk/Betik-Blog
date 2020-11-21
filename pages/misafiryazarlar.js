import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./username.module.css";
import Moment from "moment";

function HomePage({ guestarticles }) {
  return (
    <Layout>
      <Head>
        <title>Misafir Yazarlar</title>
        <meta
          name="description"
          content="Yazdığınız yazıları betikblog@gmail.com e-posta adresine gönderdiğiniz takdirde editörlerimizce incelenip sizlere gereken geri dönüşler sağlandıktan sonra yazınızın sizin de onayladığınız son halini www.betikblog.com adresinde yayınlıyoruz !"
        />
      </Head>

      <Container className={styles.pageGeneral}>
        <Row className={styles.contentCenter}>
          <h1 className={styles.titleCenter}>Sizden Gelenler</h1>
        </Row>
        <Row>
          {guestarticles.map((guestarticle) => (
            <Col sm={3} md={6} lg={3} className="my-2">
              <Link
                href="/guestarticle/[guestslug]"
                as={`/guestarticle/${slug(guestarticle.guesttitle)}-${
                  guestarticle.id
                }`}
              >
                <a className={styles.links}>
                  <Card key={guestarticle.id} className={styles.cardGeneral}>
                    <Card.Img
                      className={styles.cardImg}
                      variant="top"
                      src={guestarticle.guestbanner.name}
                      alt={guestarticle.guesttitle}
                    />
                    <Card.Body>
                      <h2 className={styles.cardTitle}>
                        {guestarticle.guesttitle}
                      </h2>
                      <br />
                      <h5>{guestarticle.guestname}</h5>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <i class="far fa-clock"></i>{" "}
                        {Moment(guestarticle.guestdate).format("DD.MM.YYYY")}
                      </small>
                    </Card.Footer>
                  </Card>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch(
    "https://betikblog.herokuapp.com/guestarticles?_sort=created_at:DESC"
  );
  const guestarticles = await data.json();

  return {
    props: {
      guestarticles,
    },
  };
}

export default HomePage;
