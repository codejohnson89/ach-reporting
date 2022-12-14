import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";
export default function RiskSummary(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Risk Summary Report</h1>
                <div className="pageContent">
                    <p>The Risk Summary report provides information about weighted risk rule violations committed by <strong>Billing Groups</strong> and their <strong>Payment Channels</strong>.

Please use the form below to generate your report.</p>
                    <h3>Parameters</h3>
                    <form>
                    <div className="pageContentRow">
                        <div className="inputGroup">
                            <label>Target Date</label>
                            <VegaDatePicker 
                                mode="single" 
                                format="MM/DD/YYYY"
                                clear-button="true"
                                style={{width:"476px"}}
                            >
                            </VegaDatePicker>
                        </div>
                    </div>
                    <div className="pageContentRow">
                        <div className="buttonGroupHldr">
                            <Button variant="contained">Generate</Button>
                            <Button variant="outlined">Clear</Button>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        </>
    )
}