import styles from "./AppHeader.module.css";
import Image from 'next/image'
import AppNav from "../AppNav/nav";
import AppUserArea from "../AppUserArea/AppUserArea";
import LogoImg from "../../public/HeartlandLogo.png";

export default function AppHeader (props:any){
    return(
        <>
            <div className={styles.appHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.site_title}>
                        <Image 
                            src={LogoImg}
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
                        <AppUserArea />
                    </div>
                </div>
            </div>
        </>
    )
}