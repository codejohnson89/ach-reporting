import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";

export default function Invoice(): JSX.Element {
    const { register, handleSubmit, control } = useForm();
    return (
        <>
            <section>
                <h1>Configure Partner Invoice Report</h1>
                <div className="pageContent">
                    <PageNotification
                        title="Info"
                        text="If you don't exactly know the specific invoice you are looking for, you can use this form to search for invoices based on partner, month and year. Invoices within one month on either side of your target will also be shown."
                    ></PageNotification>
                    <h3>Search Invoices</h3>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Partner</label>
                                <select {...register("partner", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Target Year</label>
                                <select {...register("targetYear", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
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
                        <h3>Options</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Export Mode</label>
                                <select {...register("exportMode", { required: false })}>
                                    <option>Html</option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow" style={{ marginBottom: "0px" }}>
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