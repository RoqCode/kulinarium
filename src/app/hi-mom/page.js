import styles from '../page.module.scss';

export default function HiMom() {
  return (
    <main className={styles.main}>
      <p>Hi Mom!</p>
      <a href="/" className={styles.card} rel="noopener noreferrer">
        <h2>
          Go Back <span>&lt;-</span>
        </h2>
        <p>Click here to go back to where you came from</p>
      </a>
    </main>
  );
}
