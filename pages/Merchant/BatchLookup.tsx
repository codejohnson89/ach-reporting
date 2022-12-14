import { Controller, useForm } from "react-hook-form";
// import DatePicker from 'react-datepicker';
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import PageWarning from "../../Components/AppPageWarning/pageWarning";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TextField from '@mui/material/TextField';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function BatchLookup(): JSX.Element{
    const { register, handleSubmit, control } = useForm();
    return(
        <>
            <section>
                <h1>Batch Lookup</h1>
                <PageNotification
                    title="Info"
                    text="To get started, you must at least select a billing group. Once you have selected the billing group, use the other filters in order to better target the batches you wish to see."
                ></PageNotification>
                <PageWarning
                    text="You must select a billing group and deposit date range no longer than two weeks (14 days) before results can be displayed."
                ></PageWarning>
                <div className="pageContent">
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
                            <label>
                                    Batch Status
                                </label>
                                <select {...register("batchStatus", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Batch Closed Start</label>
                                <VegaDatePicker 
                                    mode="single" 
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{width:"476px"}}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>Batch Closed End</label>
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
                                <label>Batch Number</label>
                                <input />
                                {/* <TextField></TextField> */}
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
            </section>
        </>
    )
}