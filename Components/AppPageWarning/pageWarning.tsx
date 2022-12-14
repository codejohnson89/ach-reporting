import styles from "./AppPageWarning.module.css"
import WarningIcon from '@mui/icons-material/Warning';

export default function PageWarning(props:any){
    return(
        <>
            <div className={styles.warningWrapper}>
                <div className={styles.warningBody}>
                    <div className={styles.warningIconHldr}>
                        <WarningIcon></WarningIcon>
                    </div>
                    <div className={styles.warningBodyTxtHldr}>
                        <p>
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}