import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./about.module.css";
import Image from "react-bootstrap/Image";
import Link from "next/link";

function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy</title>
        <meta
          name="description"
          content="Betik Privacy Policy"
        />
      </Head>
      <main className={styles.aboutGeneral}>
        <Container className={styles.pageGeneral}>
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className={styles.aboutCard}>
                <Card.Body>
                  <h1 className={styles.aboutTitles}> Betik Privacy Policy</h1>
                  <br />
                  <h3 className={styles.aboutTitles}> WHAT WE COLLECT</h3>
                  <p>
                    We get information about you in a range of ways. Information
                    You Give Us. Information we collect from you includes: IP
                    address; Information Automatically Collected. We may
                    automatically record certain information about how you use
                    our Site (we refer to this information as “Log Data“). Log
                    Data may include information such as a user’s Internet
                    Protocol (IP) address, device and browser type, and
                    operating system. We use this information to administer and
                    provide access to the Services Information we will never
                    collect.
                  </p>

                  <br />
                  <h3 className={styles.aboutTitles}>
                    {" "}
                    USE OF PERSONAL INFORMATION
                  </h3>
                  <p>
                    To provide our service we will use your personal information
                    in the following ways: To enable you to access and use the
                    Services To comply with law We use your personal information
                    as we believe necessary or appropriate to comply with
                    applicable laws, lawful requests and legal process, such as
                    to respond to subpoenas or requests from government
                    authorities. For compliance, fraud prevention, and safety We
                    may use your personal information to protect, investigate,
                    and deter against fraudulent, unauthorized, or illegal
                    activity
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default Privacy;
