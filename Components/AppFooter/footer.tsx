import styles from "./AppFooter.module.css";
import {Grid} from "@mui/material";
import '@heartlandone/vega/style/vega.css';
import { VegaAppFooter } from '@heartlandone/vega-react';

export default function AppFooter(props:any){
    return(
        <>
            <VegaAppFooter
                tos-url="https://www.heartland.us/terms"
                privacy-url="https://www.heartland.us/privacy-policy"
                show-disclaimer="false"
            ></VegaAppFooter>
        </>
    )
}