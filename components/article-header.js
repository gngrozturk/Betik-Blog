import React from "react";
import { Link, TwitterOutline } from "./icons";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReadingTime from "reading-time";
import Moment from "moment";

import styles from "./article-header.module.css";

Moment.locale("TR");

export default function ArticleHeader({
  title,
  firstname,
  lastname,
  content,
  keywords,
  date,
}) {
  const [copyText, setCopyText] = React.useState("Kopyala");
  const [href, setHref] = React.useState("");

  const shareOnTwitter = () => {
    const twUrl = new URL("https://twitter.com/intent/tweet");
    twUrl.searchParams.append("text", `${title} ${window.location.href}`);
    twUrl.searchParams.append(
      "hashtags",
      keywords
        .split(",")
        .map((d) => d.replace(" ", ""))
        .join(",")
    );
    window.open(twUrl.href, "_blank").focus();
  };

  return (
    <Col>
      <Row className={styles.articleIntro}>
        <div>
          <h5>
            {firstname} <strong>{lastname}</strong>
          </h5>
          <p className="text-muted">
            {Moment(date).set({ hour: 17 }).fromNow()} •{" "}
            {`${Math.ceil(ReadingTime(content).minutes)} dakika okunma`}
          </p>
        </div>
        <div className={styles.share}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{copyText}</Tooltip>}
          >
            <CopyToClipboard
              text={href}
              onCopy={() => setCopyText("Koylanadı!")}
            >
              <Link height="30" width="30" className="mr-3" />
            </CopyToClipboard>
          </OverlayTrigger>
          <TwitterOutline
            height="30"
            width="30"
            className="mr-3"
            onClick={shareOnTwitter}
          />
        </div>
      </Row>
      <hr className={styles.divider} />
    </Col>
  );
}
