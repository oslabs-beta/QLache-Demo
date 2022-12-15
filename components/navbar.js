import styles from './navbar.module.css';

function NavBar() {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.logoHome}><a href="/"><div><img src="/qlache-side-lightning.png" /></div></a></div>
        <div className={styles.directory}>
          <a href="/demo">Demo</a>
          <a href="/team">Team</a>
          <a href="https://github.com/oslabs-beta/QLache-Package" target="_blank"><img className={styles.git} src="/github-logo.png"/></a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;