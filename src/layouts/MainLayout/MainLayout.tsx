

import { Link, Outlet } from "react-router-dom"

import logo from "../../assets/images/PAW_Patrol_Logo.webp"
import styles from "./MainLayout.module.scss"

const MainLayout = () => {
    

    return (
        <main className={styles.MainLayout}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={logo} alt="logo" />
                <h2 className={styles.title}>Characters</h2>
            </div>

            {/* <nav className={styles.nav}>
                <Link to='/'>Characters</Link>
                <Link to='/about'>About</Link>
            </nav> */}

            <Outlet />
        </main>
    )
}

export default MainLayout