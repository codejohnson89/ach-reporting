import styles from "./AppHeader.module.css";
import Image from 'next/image'
import AppNav from "../AppNav/nav";

export default function AppHeader (props:any){
    return(
        <>
            <div className={styles.appHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.site_title}>
                        <Image 
                            src="/../public/HeartlandLogo.png" 
                            alt="Heartland Logo"
                            width={142}
                            height={24}
                        />
                        <h4>ACH Gateway Administration</h4>
                    </div>
                    <nav className={styles.site_navigation}>
                        <AppNav/>
                    </nav>
                    <div className={styles.userInfoContainer}>
                        user info
                    </div>
                </div>
            </div>
        </>
    )
}