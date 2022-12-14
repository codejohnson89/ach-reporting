import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function FileEntries(): JSX.Element {
    return(
        <>
        <section>
                <h1>Configure File Entries Report</h1>
                <div className="pageContent">
                <p>The File Entries report is a summary of all entries in ACH files within the given time span. It is grouped by financial institution and the file batch that contains the entries.</p>
                <p>Please use the form below to generate your report.</p>
                    <h3>Parameters</h3>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Start Date</label>
                                <VegaDatePicker
                                    mode="single"
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{ width: "476px" }}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>End Date</label>
                                <VegaDatePicker
                                    mode="single"
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{ width: "476px" }}
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