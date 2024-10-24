import styles from './LineDivider.module.css'; 

const LineDivider = ({ text }) => {
  return (
    <div className={styles.dividerContainer}>
      <hr className={styles.dividerLine} />
      <span className={styles.dividerText}>{text}</span>
      <hr className={styles.dividerLine}/>
    </div>
  );
};

export default LineDivider;