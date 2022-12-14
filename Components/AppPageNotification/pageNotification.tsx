import styles from './AppPageNotification.module.css'
import InfoIcon from '@mui/icons-material/Info';
export default function PageNotification(props:any){
    return(
        <>
            <div className={styles.notificationWrapper}>
                <div className={styles.notificationBody}>
                    <div className={styles.notificationIconHldr}>
                        <InfoIcon></InfoIcon>
                    </div>
                    <div className={styles.notificationBodyHldr}>
                        <h3>{props.title}</h3>
                        <p>
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}