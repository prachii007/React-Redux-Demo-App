import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
let Mycontact = () => {
    let [localAdd, pickLocal] = useState("");
    let [permAdd, pickPerm] = useState("");

    let dispatch = useDispatch();
    const save = () => {
        let contactinfo = {
            local: localAdd,
            perm: permAdd
        };
        let finalinfo = {
            type: "addcontact",
            info: contactinfo
        };
        dispatch(finalinfo);
        pickLocal("");
        pickPerm("");

    }
    let contact = useSelector(state => state.Contactlist);
    const delAdd = (index) => {
        let cinfo = { type: "deletecontact", cindex: index };
        dispatch(cinfo);
    }
    return (
        <div className="container mt-5 text-primary">
            <div className="row justify-content-center ">
                <div className="col-lg-9  text-center">
                    <h1 className="mb-2">Contact Details</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5">

                    <textarea type="text"
                        className="form-control border border-primary mb-3"
                        onChange={obj => pickLocal(obj.target.value)} value={localAdd}
                        placeholder="Local Address" rows="10" ></textarea>
                </div>


                <div className="col-lg-5">
                    <textarea type="number"
                        className="form-control border border-primary mb-3"

                        onChange={obj => pickPerm(obj.target.value)} value={permAdd}
                        placeholder="Permanent Address" rows="10" ></textarea>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 text-center"><button className="btn btn-primary" onClick={save}>Save</button></div>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-lg-6">
                    <table className="table table-bordered border-primary">
                    <thead>
                        <tr className="text-center">
                            <th>Local Address</th>
                            <th>Permanent Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contact.map((cinfo, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{cinfo.local}</td>
                                        <td>{cinfo.perm}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={delAdd.bind(this, index)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> 
                </div>
            </div>
        </div>
    )
}
export default Mycontact;