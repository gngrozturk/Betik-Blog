import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import styles from "./footer.module.css";
import {Instagram,Twitter,Youtube,Discord,Mail} from './icons'

function Footer() {
  return (
    <div>
      <footer>
        <Container fluid>
          <Row className={styles.footerInfo}>
            <Col lg xs={4}>
              <a href="mailto:betikblog@gmail.com" target="_blank">
                <Mail className={styles.icon} />
              </a>
            </Col>
            <Col lg xs={4}>
              <a
                href="https://instagram.com/betikblog?igshid=1g57mq6qwvfip"
                target="_blank"
              >
                <Instagram  className={styles.icon} />
              </a>
            </Col>
            <Col lg xs={4}>
              <a href="https://twitter.com/betikblog?s=08" target="_blank">
              <Twitter className={styles.icon} />
              </a>
            </Col>
            <Col lg xs={6}>
              <a
                href="https://www.youtube.com/channel/UCSWKuakUfWuDKphpYVakTQA/?guided_help_flow=5"
                target="_blank"
              >
                <Youtube className={styles.icon} />
              </a>
            </Col>
            <Col lg xs={6}>
              <a href="https://discord.gg/uTWm7xc" target="_blank">
              <Discord className={styles.icon} />
              </a>
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
