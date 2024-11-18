import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
function Homepage() {
  return (
    <>
      <main className={styles.homepage}>
        <PageNav />
        <section>
          <h1>A better way to Build your Dream website</h1>
          <h2 className={styles.cta}>Let's Get Started</h2>
        </section>
      </main>
    </>
  );
}

export default Homepage;
