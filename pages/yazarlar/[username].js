import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import Layout from "../../components/layout";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./username.module.css";
import Link from "next/link";
import matter from "gray-matter";
import Moment from "moment";

Moment.locale("TR");

function Blogs({ blogs }) {
  
  const sortByDate = (blogs) => {
    const sorter = (a, b) => {
      return new Date(b.metaData.date) - new Date(a.metaData.date);
    };
    blogs.sort(sorter);
  };
  sortByDate(blogs);

  return (
    <Layout>
      <Head>
        <title>Yazılar</title>
      </Head>
      <main className={styles.aboutGeneral}>
        <Container className={styles.pageGeneral}>
          <Row className={styles.contentCenter}>
            {blogs.map((blog, i) => (
              <Col sm={3} md={6} lg={3} className="my-2">
                <Link href={`/blog/${blog.metaData.slug}`}>
                  <a className={styles.links}>
                    <Card className={styles.cardGeneral}>
                      <Card.Img
                        className={styles.cardImg}
                        variant="top"
                        src={blog.metaData.banner}
                        alt={blog.metaData.title}
                      />
                      <Card.Body>
                        <h2 className={styles.cardTitle}>
                          {blog.metaData.title}
                        </h2>
                        <br />
                        <h5>{blog.metaData.author}</h5>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          <i class="far fa-clock"></i>  {Moment(blog.metaData.date).set({ hour: 17 }).fromNow()}
                        </small>
                      </Card.Footer>
                    </Card>
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.query;
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const blogData = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    const { data, content } = matter(rawContent);
    return { metaData: data, content };
  });
 
  return {
    props: {
      blogs: blogData.filter((b) => b.metaData.username === username),
    },
  };
}

export default Blogs;
