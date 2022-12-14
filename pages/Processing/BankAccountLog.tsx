import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { VegaDatePicker } from "@heartlandone/vega-react";
export default function BankAccountLog(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Bank Account Update Log</h1>
                <div className="pageContent">
                    <p>Pleaser use the form below to generate your report.</p>
                    <h3>Parameters</h3>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Start Date</label>
                                <VegaDatePicker 
                                mode="single" 
                                format="MM/DD/YYYY"
                                clear-button="true"
                                style={{width:"476px"}}
                            >
                            </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>End Date</label>
                                <VegaDatePicker 
                                mode="single" 
                                format="MM/DD/YYYY"
                                clear-button="true"
                                style={{width:"476px"}}
                            >
                            </VegaDatePicker>
                            </div>
                        </div>
                        <h3>Business Parameters</h3>
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