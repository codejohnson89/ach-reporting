import { VegaDatePicker } from "@heartlandone/vega-react";
import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import PageWarning from "../../Components/AppPageWarning/pageWarning";

export default function FundingLookup(): JSX.Element{
    const { register, handleSubmit, control } = useForm();
    return(
        <>
            <section>
                <h1>ACH Funding Lookup</h1>
                <div className="pageContent" style={{ marginBottom: "20px" }}>
                    <h3>Refine your search</h3>
                    <PageNotification
                        title="Info"
                        text="To get started, you must at least select a billing group and a date range for the deposit date. The deposit date range muste be no longer than two weeks (14 days). Once you have met these requirements, use the other filters in order to better target the ACH funding entities you wish to see."
                    ></PageNotification>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Billing Group
                                </label>
                                <select {...register("billingGroupChain", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>
                                    Account Entry Type
                                </label>
                                <select {...register("accountEntryType", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Deposit Date Range Start</label>
                                <VegaDatePicker 
                                    mode="single" 
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{width:"476px"}}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>Deposit Date Range End</label>
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
                                <label>Destination Routing Number</label>
                                <input/>
                            </div>
                            <div className="inputGroup">
                                <label>Destination Account Last Four Digits</label>
                                <input/>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Reference Number</label>
                                <input/>
                            </div>
                        </div>
                    </form>
                    <PageWarning
                        text="You must select a billing group and deposit date range no longer than two weeks (14 days) before results can be displayed."
                    ></PageWarning>
                </div>
            </section>
        </>
    )
}