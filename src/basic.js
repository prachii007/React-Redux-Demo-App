import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

let Mybasic = () => {
    let [fullName, pickName] = useState("");
    let [mobile, pickMobile] = useState("");
    let [emailId, pickEmailId] = useState("");

    let dispatch = useDispatch();
    let basic =useSelector(state=>state.Basiclist);
    const save = () => {
        let basicinfo = {
            name: fullName,
            mobile: mobile,
            email: emailId
        };
        let finalinfo = {
            type: "addbasic",
            info: basicinfo
        }
        dispatch(finalinfo);
        pickName("");
        pickMobile("");
        pickEmailId("");
    }
    const delBasic = (index) => {
        let binfo = { type: "deletebasic", bindex: index };
        dispatch(binfo);
    }

    return (
        <div className="container mt-5 text-danger">
            <div className="row justify-content-center ">
                <div className="col-lg-9  text-center">
                    <h1 className="mb-2">Basic Details</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-6 text-end">
                            <label >Name :</label>
                        </div>
                        <div className="col-lg-3">
                            <input type="text"
                                className="form-control border border-danger mb-3"
                                onChange={obj => pickName(obj.target.value)} value={fullName}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 text-end">
                            <label>Mobile :</label>
                        </div>
                        <div className="col-lg-3">
                            <input type="number"
                                className="form-control border border-danger mb-3"

                                onChange={obj => pickMobile(obj.target.value)} value={mobile}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 text-end">
                            <label>Email :</label>
                        </div>
                        <div className="col-lg-3">
                            <input type="email"
                                className="form-control border border-danger mb-3"

                                onChange={obj => pickEmailId(obj.target.value)} value={emailId}
                            />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6">
                        </div>
                        <div className="col-lg-3 text-center ">
                            <button className="btn btn-primary rounded" onClick={save}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10">
                    {/* <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            basic.map((binfo, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{binfo.name}</td>
                                        <td>{binfo.mobile}</td>
                                        <td>{binfo.email}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={delBasic.bind(this, index)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table> */}
                </div>

            </div>

        </div>
    )
}
export default Mybasic;