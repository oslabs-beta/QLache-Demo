import styles from './teamMember.module.css';

function TeamMember({ name, github, photo }) {
  return (
    <div className={styles.container}>
      <a href={github} target="_blank">
        <div className={styles.profile}>
          <img src={photo} />
        </div>
      </a>
      <div className={styles.info}>{name}</div>
    </div>
  );
}

export default TeamMember;