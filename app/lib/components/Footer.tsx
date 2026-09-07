import Link from 'next/link';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>ROOTS-AI™</Link>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Product</h3>
            <ul><li><Link href="/how-it-works">How It Works</Link></li><li><Link href="/platform">Platform</Link></li><li><Link href="/example-report">Example Report</Link></li></ul>
          </div>
          <div className={styles.column}>
            <h3>Company</h3>
            <ul><li><Link href="/about">About</Link></li><li><Link href="/research">Research</Link></li><li><Link href="/blog">Blog</Link></li></ul>
          </div>
          <div className={styles.column}>
            <h3>Legal</h3>
            <ul><li><Link href="/privacy">Privacy</Link></li><li><Link href="/terms">Terms</Link></li><li><Link href="/cookies">Cookies</Link></li></ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 ROOTS AI HEALTH SYSTEMS, Inc.</p>
          <p className={styles.version}>v1.0.0</p>
        </div>
      </div>
    </footer>
  );
}
