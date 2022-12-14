import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { VegaDatePicker } from "@heartlandone/vega-react";
export default function TransactionByBatch(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Batch Transaction Summary Report</h1>
                <div className="pageContent">
                    <p>Please use the below form to generate your report.</p>
                    <h3>Parameters</h3>
                    <div className="pageContentRow">
                        <div className="inputGroup">
                            <label>Transaction Batch</label>
                            <input />
                        </div>
                        <div className="inputGroup">
                            <label>Transaction Type</label>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="pageContentRow">
                        <div className="inputGroup">
                            <label>Transaction Status</label>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className="inputGroup">
                            <label>Billing Group</label>
                            <select>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <h3>Options</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Group Mode
                                </label>
                                <select {...register("groupMode", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Amounts to Include
                                </label>
                                <select {...register("amountsToInclude", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow" style={{ marginBottom: "0px" }}>
                            <div className="inputGroup">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Only Show Summaries" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="buttonGroupHldr">
                                <Button variant="contained">Generate</Button>
                                <Button variant="outlined">Clear</Button>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}