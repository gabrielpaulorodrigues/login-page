import { useState } from 'react';
import Foto from '../../assets/imagens/Foto.png'
import styles from './Register.module.css'
import CampoInput from '../../componentes/CampoInput';
import LabelCampoInput from '../../componentes/LabelCampoInput';

const Register = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    return (
        <>
            <main className={styles.principalContainer}>
                <div className={styles.formularioContainer}>
                    <div className={styles.formularioTituloContainer}>
                        <h1 className={styles.formularioTitulo}>Create an Account  👋</h1>
                        <p className={styles.formularioParagrafo}>Kindly fill in your details to create an account</p>
                    </div>
                    
                    <form className={styles.formulario}>
                        
                        <div className={styles.formularioInput}>

                            <LabelCampoInput
                                htmlFor='nome'
                                label='Your fullname*'
                            />

                            <CampoInput
                                className={styles.campoInputFormulario}
                                type='text'
                                id='nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} 
                                placeholder='Enter your name'
                                required={true}
                            />
                        </div>


                        <div className={styles.formularioInput}>

                            <LabelCampoInput
                                htmlFor='nome'
                                label='Email address*'
                            
                            />
                            
                            <CampoInput
                             className={styles.campoInputFormulario}
                             type='email'
                             id='email'
                             value={email}
                             onChange={(e) => setEmail(e.target.value)} 
                             placeholder='Enter email address'
                             required={true}
                            
                            />
                        </div>

                        <div className={styles.formularioInput}>
                            <label> Create password*</label>
                           
                            <CampoInput
                             className={styles.campoInputFormulario}
                             type='password'
                             id='senha'
                             value={senha}
                             onChange={(e) => setSenha(e.target.value)} 
                             placeholder='Create a password'
                             required={true}
                            
                            />
                        </div>
                        <div className={styles.formularioCheckBox}>
                            <input type="checkbox" id="terms" name="terms" />
                            <label htmlFor="terms">I agree to the terms & conditions</label>
                        </div>
                        <button>Register Account</button>
                    </form>
                    <div>
                        <button> Register with Google</button>
                    </div>
                </div>
                <div className={styles.imagemContainer}>
                    <img src={Foto}></img>
                </div>
            </main>
        </>
    )
}

export default Register