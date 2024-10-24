import InputField from '../InputField';
import styles from './FormComponent.module.css'

const FormComponent = ({ formState }) => {

    const { nome, setNome, email, setEmail, senha, setSenha, termos, setTermos } = formState;

    return(

        <form className={styles.formulario}>
        <InputField
            label="Your fullname*"
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Enter your name"
            required={true}
        />

        <InputField
            label="Email address*"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required={true}
        />

        <InputField
            label="Create password*"
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Create a password"
            required={true}
        />

        <InputField
            label="I agree to the terms & conditions"
            type="checkbox"
            id="termos"
            checked={termos}
            onChange={(e) => setTermos(e.target.checked)}
            required={true}
        />
    </form>
    )
}

export default FormComponent