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
  name,
  keywords,
  date,
}) {
  const [copyText, setCopyText] = React.useState("Kopyala");
  const [href, setHref] = React.useState(
    typeof window !== "undefined" ? window.location.href : null
  );

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
          <h5>{name}</h5>
          <p className="text-muted">
            {Moment(date).set({ hour: 17 }).fromNow()} •{" "}
            <i class="fas fa-hourglass-half mx-1"></i> 
          </p>
        </div>
        <div className={styles.share}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{copyText}</Tooltip>}
          >
            <CopyToClipboard
              text={href}
              onCopy={() => setCopyText("Kopyalandı!")}
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
      <Row>
        <hr className={styles.divider} />
      </Row>
    </Col>
  );
}
