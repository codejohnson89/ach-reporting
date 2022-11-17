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
                <Grid container>
                    {props.children}
                </Grid>
            </main>
            <footer>
                <AppFooter />
            </footer>
        </>
    )
}