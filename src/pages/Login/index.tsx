import './login.css'
import imgLogo from '../../assets/B2Bit Logo.png'

export const Login = () => {
    return (
        <div className="formMain">
            <img src={imgLogo}/>
            <form method='Post'>
                <label htmlFor="formMain__email">E-mail</label><br />
                <input type="email" name="email" id="formMain__email"  placeholder='@gmail.com'/><br />
                <label htmlFor="formMain__password">Password</label><br />
                <input type="password" name="password" id="formMain__password" placeholder='********'/><br />
                <button>Sign in</button>
            </form>
        </div>
    )
}