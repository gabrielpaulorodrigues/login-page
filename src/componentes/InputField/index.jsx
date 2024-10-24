import styles from './InputField.module.css'

const InputField = ({label, type, id, value, onChange, placeholder, checked, required}) => {
    return(

        <div className={styles.formInput}>
            {type === 'checkbox' ? (
                <div className={styles.checkBoxContainer}>
                    <input
                        className={styles.inputFieldCheckBox}
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={onChange}
                        required={required}
                    />
                    <label className={styles.labelForm} htmlFor={id}>
                        {label}
                    </label>
                </div>
            ) : (
                <>
                    <label className={styles.labelForm} htmlFor={id}>
                        {label}
                    </label>
                    <input
                        className={styles.inputFieldText}
                        type={type}
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                    />
                </>
            )}
        </div>
    );
};


export default InputField