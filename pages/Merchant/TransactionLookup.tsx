import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PageWarning from "../../Components/AppPageWarning/pageWarning";
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function TransactionLookup(): JSX.Element{
    const { register, handleSubmit, control } = useForm();
    return(
        <>
            <section>
                <h1>Transaction Lookup</h1>
                <PageNotification
                    title="Info"
                    text="To get started you must at least select a billing group. Once you have selected the billing group, use the other filters in order to better target the transactions you wish to see."
                ></PageNotification>
                <div className="pageContent" style={{ marginBottom: "20px" }}>
                    <h3>Refine your search</h3>
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
                                <label>Transaction Type</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Transaction Status</label>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Create Date Start</label>
                                <VegaDatePicker 
                                    mode="single" 
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{width:"476px"}}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>Create Date End</label>
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
                                <label>Transaction ID</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Batch Number</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Payer Name</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Total Amount</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Consumer Routing Number</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Consumer Account Last Four Digits</label>
                                <input />
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Order ID</label>
                                <input />
                            </div>
                            <div className="inputGroup">
                                <label>Identification Number</label>
                                <input />
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
                    text="You must select a billing group before results can be displayed."
                ></PageWarning>
            </section> 
        </>
    )
}