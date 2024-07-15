import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import gifImage from "../public/SixtyYears-1.gif";
import CSR from "../public/img/CSR.jpg";
import diamond from "../public/img/pure-art-logo-new.png"; // Replace with your GIF image path
import Link from "next/link";
import { Timeline, timelineItems } from "@/components/Timeline";
import FloatingParticles from "../components/FloatingParticles";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <div className={styles.container}>
      <FloatingParticles />
      <Head>
        <title>Pure Light</title>
        <meta name="description" content="Pure Light - SRK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <Image src={gifImage} alt="Hero GIF" className={styles.heroImage} />
        </section>
        <section className={styles.pureLightSection}>
          <div className={styles.pureLightContent}>
            <h1 className={styles.title}>
              Pure <span className={styles.highlight}>Light</span>
            </h1>
            <p>
              The word <span className={styles.highlight}>‘Pure’</span> is a
              promise of authentic quality to the industry from SRK. It reflects
              the trust in genuine trade relationships built over decades.
            </p>
            <p>
              The word <span className={styles.highlight}>‘Light’</span> is a
              promise of the right direction towards society. It reflects the
              knowledge that is key to dharma (duty) of SRK towards the world.
            </p>
          </div>
          <Image
            src={CSR}
            alt="Pure Light Image"
            className={styles.sectionImage}
          />
        </section>
        <section className={styles.pureLightSection}>
          <div className={styles.pureLightContent}>
            <h2 className={styles.highlight}>SUSTAINABILITY</h2>
            <br />
            <h3>
              Pure <span className={styles.highlight}>Commitment</span>
            </h3>
            <p>
              As a purpose-driven company, our commitment to quality, to
              society, and the environment are of the utmost importance. Both
              our natural diamond crafting facilities are now officially Net
              Zero certified.
            </p>
            <Image
              src={diamond}
              alt="Pure Light Image"
              className={styles.sectionImage}
            />

            <br />
            <br />
            <br />
            <h3>
              Pure <span className={styles.highlight}>Purpose</span>
            </h3>
            <p>
              The power of giving is greater than the desire to keep something
              for one’s own self. Great purpose starts with oneself first being
              humble, then having a desire for the welfare of the employees, and
              ultimately working for the welfare of the society at large.
              Generosity served with love can lead a child towards knowledge,
              the needy towards optimism, a community towards values, and the
              world towards enlightenment.
            </p>
          </div>
        </section>
        <section className={styles.timelineSection}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Timeline</span>
          </h1>
          <Timeline items={timelineItems} />
        </section>
        {/* Additional sections can be added here */}
      </main>

      <ContactSection />
    </div>
  );
}
