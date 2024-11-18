import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";
function WorkHistory() {
  return (
    <main className={styles.aboutme}>
      <PageNav />
      <h1>WorkHistory</h1>
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="RoySilverSuit.jpg" alt="Roy Photo" />
      </section>
    </main>
  );
}

export default WorkHistory;
