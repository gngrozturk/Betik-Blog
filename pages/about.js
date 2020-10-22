import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./about.module.css";
import Image from "react-bootstrap/Image";
import Link from "next/link";

function About() {
  return (
    <Layout>
      <Head>
        <title>Hakkımızda</title>
      </Head>
      <main className={styles.aboutGeneral}>
        <Container className="my-5">
          <Row className={styles.rowLeft}>
            <Col md={10} lg={7}>
              <Card className={styles.aboutCard}>
                <Card.Body>
                  <h4 className={styles.aboutTitles}>Biz Kimiz ?</h4>
                  <p>
                    Bizler sadece kadim tarihimizden ve inancımızdan aldığımız
                    güçle hiçbir zaman sahibi olamayacağımız zaman mefhumuna
                    layığıyla emanetçilik etmeye çalışan ve bunun yolunun
                    elimizden geldiğince kendimizi ve birbirimizi geliştirerek
                    bugünümüzü daha verimli hale getirmekten geçtiğini farketmiş
                    gençleriz.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={styles.rowRight}>
            <Col md={10} lg={7}>
              <Card className={styles.aboutCard}>
                <Card.Body>
                  <h4 className={styles.aboutTitles}>Misyonumuz</h4>
                  <p>
                    Betik'in bize yüklediği misyon bize emanet edilen zamanı
                    daha değerli kılmaya çabalamak ve yaşadığımız bu kutlu
                    coğrafyada umutsuzluğu inancımızla, hayallerimize çizilmek
                    istenen sınırları yüzyılardır yüreklerimizde taşıdığımız,
                    bitmek bilmeyen hürriyet aşkımızla yok etmek ve yeni
                    fikirler üretmek için harekete geçmektir.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={styles.rowLeft}>
            <Col md={10} lg={7}>
              <Card className={styles.aboutCard}>
                <Card.Body>
                  <h4 className={styles.aboutTitles}>Yöntemimiz</h4>
                  <p>
                    Hayallerimizi gerçekleştirmenin ilk adımının okullarımızda
                    aldığımız eğitimle yetinmeyip daha çok araştırma yapmaktan,
                    daha çok okumaktan ve elde ettiklerimizi de birbirimizle
                    paylaşmaktan, zaman zaman da sanatın şefkatli elleri
                    vasıtasıyla birbirimizin gönüllerine dokunmaktan geçtiğini
                    düşünüyoruz. Bugün attığımız bu adımın sizlerin de
                    desteğiyle birlikte hiçbir zaman umudumuzu kesmediğimiz,
                    kesmeyeceğimiz yarınlarda çok daha büyük sonuçlarının
                    olacağına inanıyoruz.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5 mx-0">
            <iframe
              className={styles.videoSize}
              width="747"
              height="420"
              src="https://www.youtube.com/embed/Ox6UZ8OiGEE"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default About;
