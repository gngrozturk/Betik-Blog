import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import unfetch from "isomorphic-unfetch";
import Image from "react-bootstrap/Image";
import slug from "slug";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./index.module.css";
import { Spotify, Instagram, Twitter, Youtube } from "../components/icons";
import { Gungor, Melih, Furkan, Kubra, Salih } from "../components/images";
import Typewriter from "typewriter-effect";

function HomePage({ articles, items, guestarticles }) {
  return (
    <Layout>
      <div className={styles.typewritter}>
        <Container>
          <div className={styles.text}>
            <Typewriter
              options={{
                strings: [
                  "Merhaba Betik'e Hoş Geldiniz !",
                  "Burada farklı alanlardan ilginizi çekebilecek yazılar bulabilir...",
                  " hatta kendi yazdığınız yazıları yayınlama fırsatı yakalayabilirsiniz !",
                  " 'Profili Görüntüle' seçeneğinden yazarlara ait daha fazla yazıya ulaşabilirsiniz",
                  "Spotify oynatma listemizi takip ederek keyifli zaman geçirebilirsiniz",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
              }}
            />
          </div>
          <br />
          <Row className={styles.headerInfo}>
            <Col md={4}>
              <Row className={styles.headerAlign}>
                <Instagram className={styles.iconHeader} />
                <a
                  href="https://www.instagram.com/accounts/login/?next=/betikblog/%3Figshid%3D1g57mq6qwvfip"
                  className={styles.link}
                  target="_blank"
                >
                  {" "}
                  betikblog
                </a>
              </Row>
            </Col>
            <Col md={4}>
              <Row className={styles.headerAlign}>
                <Twitter className={styles.iconHeader} />
                <a
                  href="https://twitter.com/betikblog?s=08"
                  className={styles.link}
                  target="_blank"
                >
                  {" "}
                  betikblog
                </a>
              </Row>
            </Col>
            <Col md={4}>
              <Row className={styles.headerAlign}>
                <Youtube className={styles.iconHeader} />
                <a
                  href="https://www.youtube.com/channel/UCSWKuakUfWuDKphpYVakTQA/?guided_help_flow=5"
                  className={styles.link}
                  target="_blank"
                >
                  {" "}
                  Betik Medya
                </a>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <Row className={styles.contentCenter}>
          <h3 className={styles.titleCenter}>En Yeniler</h3>
        </Row>
        <Row className={styles.contentCenter}>
          {articles.slice(0, 4).map((article) => (
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
                      <i class="far fa-clock"></i> {article.date}
                    </small>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        <br />
        <Row className={styles.contentCenter}>
          <h3 className={styles.titleCenter}>Sizden Gelenler</h3>
        </Row>

        <Row className={styles.contentCenter}>
          {guestarticles
            .reverse()
            .slice(0, 4)
            .map((guestarticle) => (
              <Col sm={3} md={6} lg={3} className="my-2">
                <Link
                  href="/guestarticle/[guestslug]"
                  as={`/guestarticle/${slug(guestarticle.guesttitle)}-${
                    guestarticle.id
                  }`}
                >
                  <Card key={guestarticle.id} className={styles.cardGeneral}>
                    <Card.Img
                      className={styles.cardImg}
                      variant="top"
                      src={guestarticle.guestbanner.name}
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
                        <i class="far fa-clock"></i> {guestarticle.guestdate}
                      </small>
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
        <Row className={styles.contentCenter}>
          <a
            className={styles.btnDetail}
            href="/misafiryazarlar"
            role="button"
            aria-pressed="true"
          >
            Daha Fazlası İçin <i class="fas fa-chevron-right"></i>
          </a>
        </Row>
        <br />
        <Row className={styles.contentCenter}>
          <Col lg={8}>
            <Card className={styles.announceCard}>
              <Card.Body>
                <h3 className={styles.titleCenter}>
                  Nasıl Misafir Yazar Olunur ?
                </h3>
                <br />
                <p className={styles.announceText}>
                  Yazdığınız yazıları betikblog@gmail.com e-posta adresine
                  gönderdiğiniz takdirde editörlerimizce incelenip sizlere
                  gereken geri dönüşler sağlandıktan sonra yazınızın sizin de
                  onayladığınız son halini www.betikblog.com adresinde
                  yayınlıyoruz !
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className={styles.contentCenter}>
          <h3 className={styles.titleCenter}>Son Videomuz</h3>
        </Row>

        {items.slice(0, 1).map((item) => (
          <Row key={item.id} className={styles.contentCenter}>
            <iframe
              className={styles.videoSize}
              width="747"
              height="420"
              src={`https://www.youtube.com/embed/${item.contentDetails.videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Row>
        ))}

        <Row className={styles.contentCenter}>
          <a
            className={styles.btnYoutube}
            href="https://www.youtube.com/channel/UCSWKuakUfWuDKphpYVakTQA"
            role="button"
            aria-pressed="true"
          >
            Betik Medya <i class="fab fa-youtube"></i>
          </a>
        </Row>
      </Container>

      <div fluid className="my-5">
        <div className={styles.team}>
          <Container className="my-5">
            <Row className={styles.contentCenter}>
              <h3 className={styles.titleCenter}>Takımımız</h3>
            </Row>
            <Row className={styles.contentCenter}>
              <Col md={6} lg={3}>
               <Melih/>
                <div className={styles.names}>
                  <h4>Melih Can Ekşioğlu</h4>
                  <h6>Yazar</h6>
                  <a
                    className={styles.btnGrad}
                    href="/melihcaneksioglu"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>

              <Col md={6} lg={3}>
              <Kubra/>
                <div className={styles.names}>
                  <h4>Kübra Nur Bektaş</h4>
                  <h6>Yazar</h6>
                  <a
                    className={styles.btnGrad}
                    href="/kubranurbektas"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>
              <Col md={6} lg={3}>
              <Gungor/>
                <div className={styles.names}>
                  <h4>Güngör Öztürk</h4>
                  <h6>Yazar</h6>
                  <a
                    className={styles.btnGrad}
                    href="/gungorozturk"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>
              <Col md={6} lg={3}>
              <Furkan/>
                <div className={styles.names}>
                  <h4>Furkan Öztekin</h4>
                  <h6>Yazar</h6>
                  <a
                    className={styles.btnGrad}
                    href="/furkanoztekin"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>
              <Col md={6} lg={3}>
              <Salih/>
                <div className={styles.names}>
                  <h4>Salih Akın</h4>
                  <h6>Sosyal Medya Sorumlusu</h6>
                </div>
              </Col>
            </Row>
            <Row className={styles.contentCenter}>
              <a
                className={styles.btnDetail}
                href="/team"
                role="button"
                aria-pressed="true"
              >
                Ayrıntılı Bilgi İçin <i class="fas fa-chevron-right"></i>
              </a>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="my-5">
        <Row className={styles.contentCenter}>
          <h3 className={styles.titleCenter}>
            <Spotify className={styles.iconSpotify} /> Spotify Oynatma Listemiz
          </h3>
        </Row>
        <Row className={styles.contentCenter}>
          <iframe
            className={styles.spotifySize}
            src="https://open.spotify.com/embed/playlist/5W1bxql58QBOWDRrmC0xqx"
            width="80%"
            height="400"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await unfetch(
    "https://betikblog.herokuapp.com/articles?_sort=created_at:DESC"
  );
  const articles = await data.json();

  const video = await unfetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=UUSWKuakUfWuDKphpYVakTQA&key=AIzaSyBVqkrYpS3bdem_bxDOwGfXXxoaPbnZjm4"
  );
  const videoJson = await video.json();

  const dataGuest = await unfetch(
    "https://betikblog.herokuapp.com/guestarticles?_sort=created_at:DESC"
  );
  const guestarticles = await dataGuest.json();

  return {
    props: {
      articles,
      items: videoJson.items,
      guestarticles,
    },
  };
}

export default HomePage;
