import { VegaDatePicker } from "@heartlandone/vega-react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function SubmittedTransaction(): JSX.Element{
    const { register, handleSubmit, control } = useForm();
    return(
        <>
            <section>
                <h1>Submitted Transaction</h1>
                <div className="pageContent" style={{ marginBottom: "20px" }}>
                    <h3>Parameters</h3>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Billing Group Chain
                                </label>
                                <select {...register("billingGroupChain", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
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
                        </div>
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