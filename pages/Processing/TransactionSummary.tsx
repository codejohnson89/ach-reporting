import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { VegaDatePicker } from "@heartlandone/vega-react";
export default function TransactionSummary(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Transaction Summary Report</h1>
                <div className="pageContent">
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
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Filter Report Date By</label>
                                <select {...register("filterReportDate", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Transaction Batch</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Transactiopn Type</label>
                                <select {...register("transactionType", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Transactiopn Status</label>
                                <select {...register("transactionStatus", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>First Identifier</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Second Identifier</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Third Identifier</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Fourth Identifier</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Consumer ID</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>SEC</label>
                                <select {...register("sec", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Bank Account Validation Type</label>
                                <select {...register("accountValidationType", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Segacity ResponseID</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                        <div className="inputGroup">
                                <label>Order ID</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Identification No.</label>
                                <input />
                            </div>
                        </div>
                        <h3>Business Parameters</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Partner</label>
                                <select {...register("partner", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
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
                                <label>
                                    Billing Group
                                </label>
                                <select {...register("billingGroup", { required: false })}>
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
                                <label>
                                    ODFI
                                </label>
                                <select {...register("odfi", { required: false })}>
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
                    </form>
                </div>
            </section>
        </>
    )
}