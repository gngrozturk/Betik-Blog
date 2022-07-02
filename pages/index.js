import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import unfetch from "isomorphic-unfetch";
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./index.module.css";
import { Spotify, Instagram, Twitter, Youtube } from "../components/icons";
import Typewriter from "typewriter-effect";
import Moment from "moment";
import matter from "gray-matter";

Moment.locale("TR");

function HomePage({ data, items }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  const sortByDate = (ListItems) => {
    const sorter = (a, b) => {
      return new Date(b.date) - new Date(a.date);
    };
    ListItems.sort(sorter);
  };
  sortByDate(ListItems);

  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Psikoloji,Yazılım,Nöroloji,Teknoloji,Uzay,Tarih ve daha birçok alanla ilgili yazıları burada bulabilirsiniz."
        />
      </Head>
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
          <h1 className={styles.titleCenter}>En Yeniler</h1>
        </Row>

        <Row className={styles.contentCenter}>
          {ListItems.slice(0, 4).map((blog, i) => (
            <Col sm={3} md={6} lg={3} className="my-2">
              <Link href={`blog/${blog.slug}`}>
                <a className={styles.links}>
                  <Card className={styles.cardGeneral}>
                    <Card.Img
                      className={styles.cardImg}
                      variant="top"
                      src={blog.banner}
                      alt={blog.title}
                    />
                    <Card.Body>
                      <h2 className={styles.cardTitle}>{blog.title}</h2>
                      <br />
                      <h5>{blog.author}</h5>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <i class="far fa-clock"></i>{" "}
                        {Moment(blog.date).set({ hour: 17 }).fromNow()}
                      </small>
                    </Card.Footer>
                  </Card>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="my-5">
        <br />

        <Row className={styles.contentCenter}>
          <Col lg={8}>
            <Card className={styles.announceCard}>
              <Card.Body>
                <h3 className={styles.announceTitle}>
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

        <Row className={styles.contentCenter}>
          <a
            className={styles.btnDetail}
            href="/yazarlar/misafiryazarlar"
            role="button"
            aria-pressed="true"
          >
            Misafir Yazarlar <i class="fas fa-chevron-right"></i>
          </a>
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
              <Col md={6} lg={3} className={styles.teamCol}>
                <Image
                  className={styles.personImg}
                  src="/Melih.png"
                  alt="Melih Can Ekşioğlu"
                  roundedCircle
                  fluid
                />

                <div className={styles.names}>
                  <p className={styles.nameSize}>Melih Can Ekşioğlu</p>
                  <p>Yazar</p>
                  <a
                    className={styles.btnGrad}
                    href="/yazarlar/melihcaneksioglu"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>

              <Col md={6} lg={3} className={styles.teamCol}>
                <Image
                  className={styles.personImg}
                  src="/Kubra.png"
                  alt="Kübra Nur Bektaş"
                  roundedCircle
                  fluid
                />

                <div className={styles.names}>
                  <p className={styles.nameSize}>Kübra Nur Bektaş</p>
                  <p>Yazar</p>
                  <a
                    className={styles.btnGrad}
                    href="/yazarlar/kubranurbektas"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>
              <Col md={6} lg={3} className={styles.teamCol}>
                <Image
                  className={styles.personImg}
                  src="/Gungor.png"
                  alt="Güngör Öztürk"
                  roundedCircle
                  fluid
                />

                <div className={styles.names}>
                  <p className={styles.nameSize}>Güngör Öztürk</p>
                  <p>Yazar</p>
                  <a
                    className={styles.btnGrad}
                    href="/yazarlar/gungorozturk"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>
              <Col md={6} lg={3} className={styles.teamCol}>
                <Image
                  className={styles.personImg}
                  src="/Furkan.png"
                  alt="Furkan Öztekin"
                  roundedCircle
                  fluid
                />
                <div className={styles.names}>
                  <p className={styles.nameSize}>Furkan Öztekin</p>
                  <p>Yazar</p>
                  <a
                    className={styles.btnGrad}
                    href="/yazarlar/furkanoztekin"
                    role="button"
                    aria-pressed="true"
                  >
                    Profili Görüntüle
                  </a>
                </div>
              </Col>
            </Row>
            <br />
            <Row className={styles.buttonCenter}>
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
            src="https://open.spotify.com/embed/playlist/4b3P2iMl4CuCgNKRl6eib0?utm_source=generator&theme=0"
            width="80%"
            height="400"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Row>

        <Row className={styles.contentCenter}>
          <a href="/privacy" aria-pressed="true" className={styles.links}>
            Privacy
          </a>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const video = await unfetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=UUSWKuakUfWuDKphpYVakTQA&key=AIzaSyBVqkrYpS3bdem_bxDOwGfXXxoaPbnZjm4"
  );
  const videoJson = await video.json();

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      items: videoJson.items ? videoJson.items : [],
    },
  };
}

export default HomePage;
