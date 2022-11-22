import styles from "./AppNav.module.css";
import { navData } from "./navData.js";
import Link from "next/link";
import { style } from "@mui/system";

export default function AppNav(props:any){
    return(
        <>
        <ul className={styles.Menu}>
            {navData.map((navItem) => {
                return <li>
                    <Link href={navItem.link}>{navItem.navHeading}</Link>
                </li>
            })}
        </ul>
        </>
    )
}