import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function ActivatedMerchant(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return(
        <>
        <section>
                <h1>Activated Merchant</h1>
                <div className="pageContent">
                    <h3>Parameters</h3>
                    <form>
                        <div className="pageContentRow">
                        <div className="inputGroup" style={{width:"476px"}}>
                            <label style={{color:"red"}}>No Parameters found. Plese select a parameter to continue.</label>
                        </div>
                            <div className="inputGroup">
                                <label>Business Unit</label>
                                <select {...register("businessUnit", { required: false })}>
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
                                <label>Relationship Managers</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
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
                                <label>Created Date Start</label>
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
                                <label>Activation Date</label>
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