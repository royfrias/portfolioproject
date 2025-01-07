import PageNav from "../components/PageNav";
import styles from "./AboutMe.module.css";
import hobbiesStyles from "./Hobbies.module.css";

const hobbiesData = [
  {
    title: "Website Creation",
    description:
      "Creating innovative websites is more than just a skill; it's my passion. I love blending creativity and technology to craft user-friendly experiences that inspire and engage.",
    image: "webcreation.jpg",
  },
  {
    title: "Family & Gaming",
    description:
      "Family time is sacred to me, whether it’s teaming up for epic gaming sessions with my kids or enjoying the magic of the big screen together. These moments create memories I’ll cherish forever.",
    image: "gamingwithfamily3.jpg",
  },
  {
    title: "Fitness & Health",
    description:
      "Working out is my way of staying grounded and energized. It’s not just about physical fitness but a source of mental clarity that helps me bring my best self to every challenge.",
    image: "fitnessimage1.jpg",
  },
];

function Hobbies() {
  return (
    <>
      <main className={hobbiesStyles.hobbies}>
        <PageNav />
        <section className={hobbiesStyles.hero}>
          <div className={hobbiesStyles.heroContent}>
            <h2>Discover My Passions</h2>
            <p>
              Beyond work, my hobbies fuel my creativity and keep me motivated.
              Whether it's crafting innovative websites, gaming with my kids, or
              staying fit, these passions drive me every day.
            </p>
          </div>
        </section>

        <section className={hobbiesStyles.hobbyGrid}>
          {hobbiesData.map((hobby, index) => (
            <div key={index} className={hobbiesStyles.hobbyCard}>
              <img
                src={hobby.image}
                alt={hobby.title}
                className={hobbiesStyles.hobbyImage}
              />
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>© Roy Frias | All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Hobbies;
