import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function Compensation(): JSX.Element {
    return(
        <>
        <section>
                <h1>Configure Compensation Report</h1>
                <div className="pageContent">
                    <p>Currently, compensation cannot be determined because no previous expenses have been generated. This report will become available once expenses for any previous month have been generated.</p>
                    <h3></h3>
                    <form>
                        <div className="pageContentRow"></div>
                    </form>
                </div>
            </section>
        </>
    )
}