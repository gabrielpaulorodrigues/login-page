import styles from './Button.module.css';
import { FcGoogle } from "react-icons/fc";

const Button = ({ children, styleType, onClick , icon: Icon}) => {
    return (        
      <button  
        className={`${styles.baseButton} ${styles[styleType]}`} // Combina a classe base com a classe específica do 'styleType' para estilização do botão.
        onClick={onClick}
        > 
        {Icon && (<span className={styles.iconWrapper}>
          <Icon className={styles.googleIcon} />
        </span>)}
        <span className={styles.buttonText}>{children}</span>
      </button>
    );
  };
  
  export default Button;