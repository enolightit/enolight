import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
}
