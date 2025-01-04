import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

function Projects() {
  return (
    <>
      <main className={styles.aboutme}>
        <PageNav />
        <section>
          <div>
            <Link to="https://juicepress-capstone-project-client-side.onrender.com/">
              <img className="JuicePress" src="/JPLogo.png" alt="JuicePress" />
            </Link>
            <h3 className="label">CapStone Project JuicePress Intranet</h3>
          </div>
          <div>
            <Link to="https://frimart.netlify.app/">
              <img className="frimart" src="/bluefrimart.png" alt="frimart" />
            </Link>
            <h3 className="label">FriMart</h3>
          </div>
          <div>
            <Link to="https://teachforever.netlify.app/">
              <img
                className="learn"
                src="/learnacademy.png"
                alt="learn academy"
              />
            </Link>
            <h3 className="label">Learn Academy</h3>
          </div>
          <div>
            <Link to="https://lucarioowns.github.io/PortfolioProject/">
              <img src="/stylish-portfolio.png" alt="stylish portofolio" />
              <h3 className="label">Calm Therapy</h3>
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
