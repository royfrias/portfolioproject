import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <>
      <main className={styles.aboutme}>
        <PageNav />
        <section>
          <div>
            <h2>Hi! My name is Roy Frias. It’s a pleasure to meet you.</h2>
            <p>
              I am a Junior Developer passionate about creating impactful
              digital solutions tailored to meet your unique business needs.
              With a strong foundation in modern web development technologies, I
              specialize in crafting engaging, responsive websites that not only
              look great but also perform seamlessly.
            </p>
            <h3>I bring expertise in the following technologies:</h3>
            <ul>
              <li>
                <strong>JavaScript</strong>: Building dynamic and interactive
                web applications.
              </li>
              <li>
                <strong>MongoDB, Node.js, Express.js</strong>: Developing robust
                server-side applications.
              </li>
              <li>
                <strong>
                  MERN Stack (MongoDB, Express.js, React.js, Node.js)
                </strong>
                : Creating full-stack solutions with efficient and scalable
                architecture.
              </li>
              <li>
                <strong>React.js</strong>: Designing intuitive user interfaces
                and enhancing user experiences.
              </li>
              <li>
                <strong>EmailDev</strong> : Crafting targeted, visually
                compelling emails that boost engagement and drive results for
                your brand. Let’s elevate your brand identity and maximize
                impact with optimized campaigns and conversion-focused landing
                pages.
              </li>
            </ul>

            <br />
            <p className="goal">
              My goal is to partner with you to understand your vision and
              deliver high-quality, functional websites that not only meet but
              exceed your expectations. Let’s work together to bring your ideas
              to life and achieve your digital goals.
            </p>
          </div>
          <img src="RoySilverSuit.jpg" alt="Roy Photo" />
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

export default AboutMe;
