import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function ProcessingBalances(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return(
        <>
        <section>
                <h1>Configure Processing Account Report</h1>
                <div className="pageContent">
                    <p>Use the form below to generate balance amounts for the Heartland processing bank account for the indicated ODFI and effective date.</p><p>Please be aware that this report must read large quantities of data in order to create a complete accounting of the Heartland processing bank account. Please be patient as the report might take some time to completly load.</p>
                    <h3>Generate Processing Account Report</h3>
                    <form>
                        <div className="pageContentRow"></div>
                        <h3>Options</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>ODFI</label>
                                <select {...register("odfi", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Effective Date</label>
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
                                <label>Export Mode</label>
                                <select {...register("exportMode", { required: false })}>
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