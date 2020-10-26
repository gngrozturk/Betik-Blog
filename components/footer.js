import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import styles from "./footer.module.css";
import Image from "react-bootstrap/Image";
import { Instagram, Twitter, Youtube, Discord, Mail } from "./icons";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <footer>
        <Container fluid>
          <Row className={styles.footerInfo}>
            <Col lg xs={4}>
              <Link href="mailto:betikblog@gmail.com">
                <a target="_blank">
                  <Mail className={styles.icon} />
                </a>
              </Link>
            </Col>
            <Col lg xs={4}>
              <Link href="https://instagram.com/betikblog?igshid=1g57mq6qwvfip">
                <a target="_blank">
                <Image className={styles.icon} src="/instagram.png" fluid />
                </a>
              </Link>
            </Col>
            <Col lg xs={4}>
              <Link href="https://twitter.com/betikblog?s=08">
                <a target="_blank">
                  <Twitter className={styles.icon} />
                </a>
              </Link>
            </Col>
            <Col lg xs={6}>
              <Link href="https://www.youtube.com/channel/UCSWKuakUfWuDKphpYVakTQA/?guided_help_flow=5">
                <a target="_blank">
                  <Youtube className={styles.icon} />
                </a>
              </Link>
            </Col>
            <Col lg xs={6}>
              <Link href="https://discord.gg/uTWm7xc">
                <a target="_blank">
                  <Discord className={styles.icon} />
                </a>
              </Link>
            </Col>
          </Row>
          <Row className={styles.footerName}>
            <Col>
              <h5>Developed by Güngör Öztürk</h5>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
