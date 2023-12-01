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
      <a
        href="x-apple-reminderkit://create?title=Einkaufsliste%20f%C3%BCr%20R%C3%BChrei&notes=Eier%0AMilch%0ASalz%0APfeffer%0AButter"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2>
          Rührei! <span>-&gt;</span>
        </h2>
        <p>Rührei-Einkaufsliste</p>
      </a>
    </main>
  );
}
