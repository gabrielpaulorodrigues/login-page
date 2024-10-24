import { useState } from 'react';
import styles from './Register.module.css'
import FormComponent from '../../componentes/FormComponent';
import FormTitle from '../../componentes/FormTitle';
import RandomImage from '../../componentes/RandomImage';

const Register = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [termos, setTermos] = useState('');


    const formState = {
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        termos,
        setTermos,
    };

    return (
        <>
            <main className={styles.accountCreationContainer}>
                <div className={styles.formContainer}>
                    <FormTitle 
                        title="Create an Account 👋" 
                        subtitle="Kindly fill in your details to create an account" 
                    />
                    <FormComponent 
                        formState={formState} 
                    />
                </div>
                    <RandomImage/>
            </main>
        </>
    )
}

export default Register