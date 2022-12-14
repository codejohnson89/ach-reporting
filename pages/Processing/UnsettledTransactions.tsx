import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PageWarning from "../../Components/AppPageWarning/pageWarning";
import { VegaDatePicker } from "@heartlandone/vega-react";
export default function UnsettledTransactions(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Unsettled Void Lookup</h1>
                <PageNotification
                    title="Info"
                    text="To get started, you must at least select a billing group. Once you have selected the billing group, use the other filters in order to better target the batches you wish to see."
                ></PageNotification>
                <div className="pageContent" style={{marginBottom:"40px"}}>
                    <h3>Refine Your Search</h3>
                    <form>
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
                                <label>Payer Name</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Total Amount
                                </label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>
                                    Transaction ID
                                </label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Initiated Start Date</label>
                                <VegaDatePicker
                                    mode="single"
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{ width: "476px" }}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>Initiated End Date</label>
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
                                <Button variant="contained">Search</Button>
                                <Button variant="outlined">Reset</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <PageWarning
                    text="You must select a billing group and deposit date range no longer than two weeks (14 days) before results can be displayed."
                ></PageWarning>
            </section>
        </>
    )
}