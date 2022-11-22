import {Grid} from "@mui/material";
import AppHeader from '../AppHeader/header';
import AppFooter from "../AppFooter/footer";

export default function Layout(props:any){
    return (
        <>
            <header>
                <AppHeader/>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <AppFooter />
            </footer>
        </>
    )
}