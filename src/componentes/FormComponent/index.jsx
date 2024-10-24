import Button from '../Button';
import InputField from '../InputField';
import styles from './FormComponent.module.css'

const FormComponent = ({ formState }) => {

    const { nome, setNome, email, setEmail, senha, setSenha, termos, setTermos } = formState;

    return(

    <form>

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

        <Button 
        styleType="formButton" // 'styleType' aplica a classe de estilo correspondente ao botão, que é definida no módulo CSS na mesma pasta do componente.
        onClick={() => console.log('Botão Primário')} 
        >
            Register Account
        </Button>

    </form>

    )
}

export default FormComponent