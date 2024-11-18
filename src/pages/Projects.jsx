import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";
import { Link } from "react-router-dom";
function Projects() {
  return (
    <>
      <main className={styles.aboutme}>
        <PageNav />
        <section>
          <div>
            <Link to="https://lucarioowns.github.io/PortfolioProject/">
              <img src="/stylish-portfolio.png" alt="stylish portofolio" />
            </Link>
          </div>
          <div>
            <Link to="https://lucarioowns.github.io/PortfolioProject/">
              <img src="/stylish-portfolio.png" alt="stylish portofolio" />
            </Link>
          </div>
          <div>
            <Link to="https://lucarioowns.github.io/PortfolioProject/">
              <img src="/stylish-portfolio.png" alt="stylish portofolio" />
            </Link>
          </div>
          <div>
            <Link to="https://lucarioowns.github.io/PortfolioProject/">
              <img src="/stylish-portfolio.png" alt="stylish portofolio" />
            </Link>
          </div>
        </section>
        <div className={styles.footer}>
          <div className="copyright w-col w-col-6">
            <p className="copyright-text">© Roy Frias | All rights reserved</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
