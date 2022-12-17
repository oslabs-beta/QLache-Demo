import styles from './navbar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoHome}>
        <a href="/">
          <div>
            <img src="/qlache-side-lightning.png" />
          </div>
        </a>
      </div>
      <div className={styles.directory}>
        <a href="/demo">Demo</a>
        <a href="/team">Team</a>
        <a className={styles.git} href="https://github.com/oslabs-beta/QLache-Package" target="_blank">
          <div className={styles.git}>
            <img src="/github-logo.png" />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
