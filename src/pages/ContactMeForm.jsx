import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";
function ContactMeForm() {
  return (
    <>
      <main className={styles.aboutme}>
        <PageNav />

        <section>
          <div>
            <form
              className={styles.form}
              name="email-form"
              data-name="Email Form"
              id="email-form"
              action="https://formsubmit.co/roy.frias2@gmail.com"
              method="POST"
            >
              <input
                className={styles.row}
                type="email"
                class="email-text w-input"
                maxLength="256"
                name="email"
                data-name="Email"
                placeholder="Your Email"
                id="field"
                required={true}
              />

              <div className={styles.row}>
                <textarea
                  placeholder="Write your message here"
                  maxlength="5000"
                  id="field"
                  name="field"
                  data-name="field"
                  class="msg-text w-input"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                className={styles.button}
              />
            </form>
          </div>

          <div className={styles.form}>
            <ul>
              <li>
                <div>
                  <div>
                    <h4>Name</h4>
                  </div>
                  <div>
                    <p>Roy Frias</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="email">
                  <div>
                    <h4>Email</h4>
                  </div>
                  <div>
                    <a href="mailto:roy.frias2@gmail.com">
                      <p className="email">roy.frias2@gmail.com</p>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <h4>Phone</h4>
                  </div>
                  <div>
                    <a href="tel:5512262002">
                      <p>+1 (551) 226 - 2002</p>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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

export default ContactMeForm;
