import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Returns(): JSX.Element{
    const { register, handleSubmit, control } = useForm();
    return(
        <>
            <section>
                <h1>Merchant Return Configuration</h1>
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
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Month
                                </label>
                                <select {...register("month", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>
                                    Year
                                </label>
                                <select {...register("year", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    Batch Number
                                </label>
                                <input {...register("batchNumber", { required: false })} />
                            </div>
                            <div className="inputGroup">
                                <label>
                                    Transaction Type
                                </label>
                                <select {...register("transactionType", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="pageContentRow">
                            <div className="inputGroup">
                                <label>
                                    SEC
                                </label>
                                <select {...register("sec", { required: false })}>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <div className="inputGroup">
                                <label>
                                    Return Code
                                </label>
                                <select {...register("returnCode", { required: false })}>
                                    <option></option>
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