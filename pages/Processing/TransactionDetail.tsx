import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export default function TransactionDetails(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Transaction Detail Report</h1>
                <div className="pageContent">
                    <p>Please use the form below to generate your report.</p>
                    <h3>Parameters</h3>
                    <form>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>Transaction ID</label>
                                <input {...register("transactionID", { required: false })} />
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