import styles from './profile.module.css'
import profile from '../../assets/perfil.jpg'

export const Profile = () => {
    return (
        <div className={styles.container}>
            <header>
                <button className={styles.button}>Logout</button>
            </header>
            <main>
                <div className={styles.profile}>
                    <div className={styles.profile__picture}>
                        <div className={styles.profile__name}>Profile Picture</div>
                        <img src={profile} className={styles.profile__pic}/>
                    </div>
                    <div className={styles.profile__infos}>
                        <div className='profile__label'>Your <strong>Name</strong></div>
                        <input type="text" name="" id="" value={'Hiago Gomes'} disabled className={styles.profile__input}/>
                        <div className='profile__label'>Your <strong>E-mail</strong></div>
                        <input type="email" name="" id="" value={'hiago_h3@hotmail.com'} disabled className={styles.profile__input}/>
                    </div>
                </div>
            </main>

        </div>
       
    )
}