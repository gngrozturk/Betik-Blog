import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from "./team.module.css";
import Image from "react-bootstrap/Image";
import { Instagram, Twitter } from "../components/icons";

function Team() {
  return (
    <Layout>
      <Head>
        <title>Takımımız</title>
        <meta
          name="description"
          content="Bizler sadece kadim tarihimizden ve inancımızdan aldığımız güçle hiçbir zaman sahibi olamayacağımız zaman mefhumuna layığıyla emanetçilik etmeye çalışan ve bunun yolunun elimizden geldiğince kendimizi ve birbirimizi geliştirerek bugünümüzü daha verimli hale getirmekten geçtiğini farketmiş gençleriz."
        />
      </Head>
      <main className={styles.teamGeneral}>
        <Container className="my-5">
          <Row className={styles.rowCenter}>
            <h1 className={styles.title}>Takımımız</h1>
          </Row>

          <Row className={styles.rowCenter}>
            <Col lg={10}>
              <Card className={styles.personCard}>
                <Card.Body>
                  <Row>
                    <Col lg={3}>
                      <Row>
                        <Image
                          src="/Gungor.png"
                          roundedCircle
                          fluid
                          alt="Güngör Öztürk"
                        />
                      </Row>
                      <Row className={styles.mediaRow}>
                        <a href="https://www.instagram.com/ozturkk.gungor/">
                          <Instagram className={styles.icon} />
                        </a>
                        <a href="https://twitter.com/ozturkkgungorr?s=08">
                          <Twitter className={styles.icon} />
                        </a>
                      </Row>
                    </Col>

                    <Col lg={9}>
                      <Row>
                        <Col>
                          <h4 className={styles.name}>Güngör Öztürk</h4>
                          <p>
                            Merhaba, ben Güngör Öztürk. Konya Teknik
                            Üniversitesi Bilgisayar Mühendisliği Bölümü 3.sınıf
                            öğrencisiyim. Bugün uzun zamandır hayalini kurduğum
                            bu platformda, Betik çatısı altında sizlerle
                            buluşabildiğim için çok mutluyum. Değişen zamanla
                            birlikte bilginin değerinin de ivmelenerek arttığını
                            ve bu bilgileri sadece kendimize saklamak yerine
                            elimizden geldiğince birbirimizle paylaşarak fikir
                            dünyalarımıza katkı sağlamamız gerektiğini
                            düşünüyorum.Bu nedenle teknoloji, yazılım ve benzeri
                            konularda yapacağım araştırmaların sonucunda
                            öğrendiklerimi burada sizlerle paylaşmaya
                            çalışacağım. Birlikte çok şey öğreneceğimize
                            inandığım bu yolda bugün ilk adımlarımızı atarken
                            adımlarımızın zamanla daha da sıklaşacağını ümit
                            ediyor ve bana eşlik ettiğiniz için teşekkür
                            ediyorum.
                          </p>
                        </Col>
                      </Row>
                      <Row className={styles.btnAlign}>
                        <a
                          className={styles.btnGrad}
                          href="/yazarlar/gungorozturk"
                          role="button"
                          aria-pressed="true"
                        >
                          Profili Görüntüle
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={styles.rowCenter}>
            <Col lg={10}>
              <Card className={styles.personCard}>
                <Card.Body>
                  <Row>
                    <Col lg={3}>
                      <Row>
                        <Image
                          src="/Furkan.png"
                          roundedCircle
                          fluid
                          alt="Furkan Öztekin"
                        />
                      </Row>

                      <Row className={styles.mediaRow}>
                        <a href="https://www.instagram.com/oztekinfurkan03/?igshid=5s0mt1owyqxl">
                          <Instagram className={styles.icon} />
                        </a>
                        <a href="https://twitter.com/oztekinfurkan03?s=08">
                          <Twitter className={styles.icon} />
                        </a>
                      </Row>
                    </Col>

                    <Col lg={9}>
                      <Row>
                        <Col>
                          <h4 className={styles.name}>Furkan Öztekin</h4>
                          <p>
                            Herkese Merhabalar, ben Furkan Öztekin. İstanbul
                            Teknik Üniversitesi Elektronik Haberleşme Bölümü’nde
                            2. sınıf öğrencisiyim. Arkadaşlarımın daveti ile
                            katıldığım bu ortamda çeşitli dallarda edindiğim ve
                            derlediğim bilgileri elimden geldiğince sizinle
                            paylaşmaya çalışacağım. Bağımsızlık mücadelemizde
                            bize yol gösteren Gazi M.Kemal Atatürk’ün "Hayatta
                            en hakiki mürşit ilimdir, fendir" sözünü kendimize
                            ilke edindiğimiz bu süreçte sizlerle birlikte
                            keyifli bir öğrenme süreci geçireceğimize
                            inanıyorum.
                          </p>
                        </Col>
                      </Row>
                      <Row className={styles.btnAlign}>
                        <a
                          className={styles.btnGrad}
                          href="/yazarlar/furkanoztekin"
                          role="button"
                          aria-pressed="true"
                        >
                          Profili Görüntüle
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={styles.rowCenter}>
            <Col lg={10}>
              <Card className={styles.personCard}>
                <Card.Body>
                  <Row>
                    <Col lg={3}>
                      <Row>
                        <Image
                          src="/Kubra.png"
                          roundedCircle
                          fluid
                          alt="Kübra Nur Bektaş"
                        />
                      </Row>

                      <Row className={styles.mediaRow}>
                        <a href="https://instagram.com/kubraabektas?igshid=x95apt5mfox5">
                          <Instagram className={styles.icon} />
                        </a>
                        <a href="https://twitter.com/kubraabektass?s=08">
                          <Twitter className={styles.icon} />
                        </a>
                      </Row>
                    </Col>

                    <Col lg={9}>
                      <Row>
                        <Col>
                          <h4 className={styles.name}>Kübra Nur Bektaş</h4>
                          <p>
                            Ben Kübra Nur Bektaş. Gazi Üniversitesi Tıp
                            Fakültesi İngilizce 2. sınıf öğrencisiyim. Bu
                            platformda insan ruhu ve psikolojisi üzerine
                            araştırmalarımı ve bilgi birikimlerimi sizlerle
                            paylaşacağım. Bununla birlikte, psikiyatrist olma
                            amacı olan bir öğrenci olarak ilk ve en büyük
                            maksadım, problemleri olan yaşlı genç tüm insanlara
                            birer ışık olabilmek ve yalnız olmadıklarını
                            hatırlatmaktır. Biliyoruz ki bizler kendimizi
                            geliştirmedikçe; bir birey, bir anne, bir baba ya da
                            bir çocuk olarak toplumumuza, ülkemize ve en çok da
                            kendimize karşı görevimizi yerine getirmiyoruz
                            demektir. Ve unutmamalıyız ki cehaletin verdiği
                            rahatlık, öğrenmenin verdiği zevkin yerini hiçbir
                            zaman tutamaz. Destek olan ve okuyan herkese
                            teşekkürler.
                          </p>
                        </Col>
                      </Row>
                      <Row className={styles.btnAlign}>
                        <a
                          className={styles.btnGrad}
                          href="/yazarlar/kubranurbektas"
                          role="button"
                          aria-pressed="true"
                        >
                          Profili Görüntüle
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className={styles.rowCenter}>
            <Col lg={10}>
              <Card className={styles.personCard}>
                <Card.Body>
                  <Row>
                    <Col lg={3}>
                      <Row>
                        <Image
                          src="/Melih.png"
                          roundedCircle
                          fluid
                          alt="Melih Can Ekşioğlu"
                        />
                      </Row>
                      <Row className={styles.mediaRow}>
                        <a href="https://instagram.com/melih.eksioglu?igshid=1fkribkvst9id">
                          <Instagram className={styles.icon} />
                        </a>
                        <a href="https://twitter.com/meliheksioglu?s=08">
                          <Twitter className={styles.icon} />
                        </a>
                      </Row>
                    </Col>

                    <Col lg={9}>
                      <Row>
                        <Col>
                          <h4 className={styles.name}>Melih Can Ekşioğlu</h4>
                          <p>
                            Yaşadığı çağı, toplumu şu an ki haliyle
                            benimseyemeyen, bir şeyler yapmanın gerekliliğine
                            inanan, elini taşın altına sokmak isteyen, yeni bir
                            çağ hayal eden, gücünü, inancını, ümidini; ilimden,
                            sevgiden, hayallerinden alan, sadece eleştiren,
                            yargılayan değil ;geliştiren, değiştiren, yön veren
                            bir insan haline gelmeye çabalayan biri…Adım ise
                            Melih Can Ekşioğlu. Şu anda Ankara Üniversitesi Tıp
                            Fakültesi 3. sınıf öğrencisiyim, bu değerli
                            platformda Nöropsikiyatri alanında öğrendiklerimi
                            kendi süzgecimden geçirdikten sonra sizlerle
                            paylaşacağım. Sizlerle öğrenecek, sizlerden yeni
                            şeyler öğreneceğim. Hayallerimin ilk adımını attığım
                            şu zamanlarda, bu platformda sizlerle birlikte
                            olmanın mutluluğunu yaşıyorum. Bu yolda beraber
                            yürümek, bir şeyleri değiştirmek isteyen herkesi bu
                            platforma bekliyorum.Satırlarıma son vermeden önce
                            şu dizeleri sizlerle paylaşmak istiyorum: ‘’Ben öyle
                            bilirim ki yaşamak/Berrak bir gökte çocuklar aşkına
                            savaşmaktır.’’ Sevgi dolu, merhamet dolu, kitaplarla
                            dolu bir dünyada çocukların büyümesi ümidiyle…
                            Hoşçakalın.
                          </p>
                        </Col>
                      </Row>
                      <Row className={styles.btnAlign}>
                        <a
                          className={styles.btnGrad}
                          href="/yazarlar/melihcaneksioglu"
                          role="button"
                          aria-pressed="true"
                        >
                          Profili Görüntüle
                        </a>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        
        </Container>
      </main>
    </Layout>
  );
}

export default Team;
