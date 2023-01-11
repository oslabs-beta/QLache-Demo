import styles from './navbar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoHome}>
        <a href="/">
          <div className={styles.navLeft}>
            <img src="/pink-logo.svg" className={styles.navLogo} />
            <h1>Lache</h1>
          </div>
        </a>
      </div>
      <div className={styles.directory}>
        <a href="/">Home</a>
        <a href="/docs">Docs</a>
        <a href="/demo">Demo</a>
        <a href="/team">Team</a>
        <a
          className={styles.git}
          href="https://github.com/oslabs-beta/QLache-Package"
          target="_blank"
        >
          <div className={styles.git}>
            <img src="/github-logo.png" className={styles.git} />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
