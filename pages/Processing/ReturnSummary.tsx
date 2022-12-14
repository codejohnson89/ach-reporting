import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { VegaDatePicker } from "@heartlandone/vega-react";
export default function ReturnSummary(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Return Summary Report</h1>
                <div className="pageContent" style={{marginBottom:"40px"}}>
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
                                <label>Return Code</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Consumer ID</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>SEC</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <h3>Business Parameters</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Partner</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Business Unit</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Billing Group</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>
                                    Payment Channel
                                </label>
                                <span>
                                    <KeyboardBackspaceIcon /> Select a billing group to show payment channels.
                                </span>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>ODFI</label>
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
                                <label>Group Mode</label>
                                <select {...register("exportMode", {required: false})} >
                                    <option>No Grouping</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Export Mode</label>
                                <select {...register("exportMode", {required: false})} >
                                    <option>HTML</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow" style={{marginBottom: "0px"}}>
                            <div className="inputGroup">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Include Transaction Details" />
                                </FormGroup>
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