import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";

export default function Invoice(): JSX.Element{
    const { register, handleSubmit, control } = useForm();
    return(
        <>
            <section>
                <h1>Configure Billing Group Invoice Report</h1>
                <PageNotification
                title="Info"
                text="If you don't exactly know the specific invoice you are looking for, you can use this form to search for invoices based on billing group, month and year. 
                Invoices within one month on either side of your target will also be shown."
                ></PageNotification>
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
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGrouup">
                                <label>Target Year</label>
                                <select {...register("targetYr", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGrouup">
                                <label>Target Month</label>
                                <select {...register("targetMonth", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="buttonGroupHldr">
                                <Button variant="contained">Find Invoices</Button>
                            </div>
                        </div>
                        <p>Alternativly, if you know exactly the invoice number that you need, you can enter it in the form below.</p>
                        <h3>Find Invoive</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Invoice Number</label>
                                <input {...register("invoiceNumber", {required: false})} />
                            </div>
                        </div>
                        <h3>Options</h3>
                        <div className="pageContentRow">
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