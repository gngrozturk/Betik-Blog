import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./navigation.module.css";
import { Logo } from "./icons";

function Navigation() {
  return (
    <div>
      <Navbar className={styles.bgColor} expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav}>
            <NavDropdown
              title="Biz Kimiz ?"
              id="basic-nav-dropdown"
              className={styles.mainItems}
            >
              <NavDropdown.Item href="/about" className={styles.dropdownItem}>
                Hakkımızda
              </NavDropdown.Item>

              <NavDropdown.Item href="/team" className={styles.dropdownItem}>
                Takımımız
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Mühendislik Bilimleri"
              id="basic-nav-dropdown"
              className={styles.mainItems}
            >
              <NavDropdown.Item
                href="/yazarlar/gungorozturk"
                className={styles.dropdownItem}
              >
                Güngör Öztürk
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/yazarlar/furkanoztekin"
                className={styles.dropdownItem}
              >
                Furkan Öztekin
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Sağlık Bilimleri"
              id="basic-nav-dropdown"
              className={styles.mainItems}
            >
              <NavDropdown.Item
                href="/yazarlar/melihcaneksioglu"
                className={styles.dropdownItem}
              >
                Melih Ekşioğlu
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/yazarlar/kubranurbektas"
                className={styles.dropdownItem}
              >
                Kübra Bektaş
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/yazarlar/misafiryazarlar" className={styles.mainItems}>
              Misafir Yazarlar{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
