import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";
function Hobbies() {
  return (
    <>
      <main className={styles.aboutme}>
        <PageNav />
        <section>
          <div>
            <h2>
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
          </div>
          <img src="RoySilverSuit.jpg" alt="Roy Photo" />
        </section>
      </main>

      <div className={styles.footer}>
        <div className="copyright w-col w-col-6">
          <p className="copyright-text">© Roy Frias | All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Hobbies;
