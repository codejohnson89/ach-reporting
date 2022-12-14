import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function IncomeStatement(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return(
        <>
            <section>
                <h1>Configure Income Statement Report</h1>
                <div className="pageContent">
                    <p>Use the form below to generate an income statement for the Billing Groups and/or Business Units. This has a fixed export format of an .xlsx spreadshett. Income statements are only available for months which have had expenses generated for them. The complete list is available belwo.</p>
                    <h3>Generate Income Statement Report</h3>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Start Processing Date</label>
                                <VegaDatePicker
                                    mode="single"
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{ width: "476px" }}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>End Processing Date</label>
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
                            <div className="inputGroup">
                                <label>Business Units</label>
                                <select {...register("businessUnits", { required: false })}>
                                    <option>Html</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Billing Groups</label>
                                <select {...register("billingGroups", { required: false })}>
                                    <option>Html</option>
                                    <option></option>
                                    <option></option>
                                </select>
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