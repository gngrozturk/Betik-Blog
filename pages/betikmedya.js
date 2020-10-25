import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import unfetch from "isomorphic-unfetch";
import styles from "./betikmedya.module.css";
import { Youtube } from "../components/icons";

function BetikMedya({ items }) {
  return (
    <Layout>
      <Head>
        <title>Betik Medya</title>
        <script src="https://apis.google.com/js/platform.js"></script>
      </Head>
      <Container className="my-4">
        <Row className={styles.contentCenter}>
          <h1 className={styles.titleCenter}>Betik Medya</h1>
          <div className={styles.subscribe}>
            <span
              class="g-ytsubscribe"
              data-channelid="UCSWKuakUfWuDKphpYVakTQA"
              data-layout="default"
              data-count="hidden"
            ></span>
          </div>
        </Row>
        {items.map((item) => (
          <Row key={item.id} className="justify-content-center my-4 mx-1">
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
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await unfetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=UUSWKuakUfWuDKphpYVakTQA&key=AIzaSyBVqkrYpS3bdem_bxDOwGfXXxoaPbnZjm4"
  );
  const dataJson = await data.json();

  return {
    props: {
      items: dataJson.items,
    },
  };
}

export default BetikMedya;
