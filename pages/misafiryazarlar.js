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

function HomePage({ data }) {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <Layout>
      <Container className="my-5">
        <Row className={styles.contentCenter}>
          <h1 className={styles.titleCenter}>Misafir Yazarlar</h1>
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
                        <i class="far fa-clock"></i> {blog.date}
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
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/misafircontent`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const video = await unfetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=UUSWKuakUfWuDKphpYVakTQA&key=AIzaSyBVqkrYpS3bdem_bxDOwGfXXxoaPbnZjm4"
  );
  const videoJson = await video.json();

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/misafircontent/${blog}`;
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
