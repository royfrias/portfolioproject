import PageNav from "../components/PageNav";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

function Projects() {
  return (
    <>
      <main className={styles.projects}>
        <PageNav />
        <section>
          <div>
            <Link to="https://juicepress-capstone-project-client-side.onrender.com/">
              <img
                className={`${styles["project-img"]} JuicePress`}
                src="/JPLogo.png"
                alt="JuicePress"
              />
              <h3 className="label">CapStone Project JuicePress Intranet</h3>
            </Link>
          </div>
          <div>
            <Link to="https://frimart.netlify.app/">
              <img
                className={`${styles["project-img"]} frimart`}
                src="/bluefrimart.png"
                alt="frimart"
              />
              <h3 className="label">FriMart</h3>
            </Link>
          </div>
          <div>
            <Link to="https://teachforever.netlify.app/">
              <img
                className={`${styles["project-img"]} learn`}
                src="/learnacademy.png"
                alt="learn academy"
              />
              <h3 className="label">Learn Academy</h3>
            </Link>
          </div>
          <div>
            <Link to="https://calmtherapy.netlify.app/">
              <img
                className={`${styles["project-img"]} calmtherapy`}
                src="/calm4-free.png"
                alt="calm therapy"
              />
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
