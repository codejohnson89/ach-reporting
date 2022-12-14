import { useForm } from "react-hook-form";
import PageNotification from "../../Components/AppPageNotification/pageNotification";
import { Button } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export default function Statement(): JSX.Element {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <section>
                <h1>Configure Partner Statement</h1>
                <div className="pageContent">
                    <PageNotification
                        title="Info"
                        text="Please be aware that the closer the current date is to the end of the statement period, the more likely it is that transaction totals will change. Most returns occur within three (3) business days of the original transaction, so the further away the current date is from the end of the statement period, the more likely it is that the statement will not change. For best results, wait until at least the third business dat of the month before running a statement for the previous month."
                    ></PageNotification>
                    <h3>Parameters</h3>
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
                                <label>Month</label>
                                <select {...register("month", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>Year</label>
                                <select {...register("year", { required: false })}>
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