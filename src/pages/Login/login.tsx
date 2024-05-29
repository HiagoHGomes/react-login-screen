import styles from './Login.module.css'
import imgLogo from '../../assets/B2Bit Logo.png'
import { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.formMain}>
            <img src={imgLogo}/>
            <form method='Post'>
                <label htmlFor="formMain__email">E-mail</label><br />
                <input type="email" name="email" id="formMain__email"  value={email} placeholder='@gmail.com'/><br />
                <label htmlFor="formMain__password">Password</label><br />
                <input type="password" name="password" id="formMain__password" value={password} placeholder='**********'/><br />
                <button>Sign in</button>
            </form>
        </div>
    )
}