import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
function Homepage() {
  return (
    <>
      <main className={styles.homepage}>
        <PageNav />
        <section>
          <h1>A better way to Build your Dream website</h1>
          <Link to="/aboutme" className={styles.cta}>
            Let's Get Started
          </Link>
        </section>
      </main>
    </>
  );
}

export default Homepage;
