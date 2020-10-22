import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
function Author() {
  return (
    <div>
      <Row className="my-3">
        <Col xs={2}>
          <Image
            width="100%"
            src="http://www.betikblog.com/images/gungor.png"
            roundedCircle
          />
        </Col>

        <Col>
          <p>
            Merhaba, ben Güngör Öztürk. Konya Teknik Üniversitesi Bilgisayar
            Mühendisliği Bölümü 2.sınıf öğrencisiyim. Bugün uzun zamandır
            hayalini kurduğum bu platformda, Betik çatısı altında sizlerle
            buluşabildiğim için çok mutluyum. Değişen zamanla birlikte bilginin
            değerinin de ivmelenerek arttığını ve bu bilgileri sadece kendimize
            saklamak yerine elimizden geldiğince birbirimizle paylaşarak fikir
            dünyalarımıza katkı sağlamamız gerektiğini düşünüyorum.Bu nedenle
            teknoloji, yazılım ve benzeri konularda yapacağım araştırmaların
            sonucunda öğrendiklerimi burada sizlerle paylaşmaya çalışacağım.
            Birlikte çok şey öğreneceğimize inandığım bu yolda bugün ilk
            adımlarımızı atarken adımlarımızın zamanla daha da sıklaşacağını
            ümit ediyor ve bana eşlik ettiğiniz için teşekkür ediyorum.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Author;
