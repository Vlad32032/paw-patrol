import {  Outlet } from "react-router-dom"

import CustomCursor from "../../components/UI/CustomCursor/CustomCursor"

import logo from "../../assets/images/PAW_Patrol_Logo.webp"
import styles from "./MainLayout.module.scss"


const MainLayout = () => {
    

    return (
        <main className={styles.MainLayout} data-m="mmmm">
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={logo} alt="logo" />
                <h2 className={styles.title}>Characters</h2>
            </div>

            {/* <nav className={styles.nav}>
                <Link to='/'>Characters</Link>
                <Link to='/about'>About</Link>
            </nav> */}

            <Outlet />

            <CustomCursor />
        </main>
    )
}

export default MainLayout