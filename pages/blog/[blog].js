import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Col from "react-bootstrap/Col";
import ArticleHeader from "../../components/article-header";

const Blog = ({ content, data }) => {
  const frontmatter = data;

  const [copyText, setCopyText] = React.useState("Kopyala");
  const [href, setHref] = React.useState("");

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
    setHref(window.location.href);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="keywords" content={frontmatter.keywords}></meta>
        <meta name="description" content={frontmatter.title}></meta>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>

      <Container className="my-4">
        <Row className={styles.abstract}>
          <Col lg={10}>
            <h1 className={styles.titles}>{frontmatter.title}</h1>
            <hr className={styles.line} />

            <Image fluid src={frontmatter.banner} width="100%" />

            <ArticleHeader
              {...frontmatter}
              name={frontmatter.author}
              date={frontmatter.date}
            />

          </Col>
        </Row>

        <Row className={styles.content}>
          <Col lg={9}>
            <ReactMarkdown
              escapeHtml={true}
              className={styles.text}
              source={content}
            />
            <div id="disqus_thread"></div>
            <br />
            <a
              className={styles.btnGrad}
              href={`../../yazarlar/${frontmatter.username}`}
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
};

export default Blog;

Blog.getInitialProps = async (context) => {
  const { blog } = context.query;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${blog}.md`);
  const data = matter(content.default);

  return { ...data };
};
