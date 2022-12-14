import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { VegaDatePicker } from "@heartlandone/vega-react";

export default function IncomeCharges(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return(
        <>
        <section>
                <h1>Income and Charges Configure</h1>
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
                                    style={{ width: "476px" }}
                                >
                                </VegaDatePicker>
                            </div>
                            <div className="inputGroup">
                                <label>End Date</label>
                                <VegaDatePicker
                                    mode="single"
                                    format="MM/DD/YYYY"
                                    clear-button="true"
                                    style={{ width: "476px" }}
                                >
                                </VegaDatePicker>
                            </div>
                        </div>
                        <h3>Business Parameters</h3>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>ODFI</label>
                                <select {...register("odfi", { required: false })}>
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
                        <div className="pageContentRow" style={{marginBottom: "0px"}}>
                            <div className="inputGroup">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Group By Business Unit" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="pageContentRow" style={{marginBottom: "0px"}}>
                            <div className="inputGroup">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Hide Details" />
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