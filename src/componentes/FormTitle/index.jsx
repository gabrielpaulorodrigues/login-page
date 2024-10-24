import styles from './FormTitle.module.css';

const FormTitle = ({ title, subtitle }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
};

export default FormTitle;