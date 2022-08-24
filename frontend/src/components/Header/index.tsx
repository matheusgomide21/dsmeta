import logo from "../../assets/img/logo.svg"
import "./styles.css"

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <div className="dev-container">
            <p>
              Desenvolvido por{" "}
              <a href="https://github.com/matheusgomide21">
                <p className="dev">Matheus Gomide</p>
              </a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
