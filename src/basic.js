import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

let Mybasic = () => {
    let [fullName, pickName] = useState("");
    let [mobile, pickMobile] = useState("");
    let [emailId, pickEmailId] = useState("");

    let dispatch = useDispatch();
    // let basic =useSelector(state=>state.Basiclist);
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
    <div className="container mt-5 text danger">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>Basic Details</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <label>Name :</label>
            </div>
            <div className="col-lg-6">
                <input type="text"
                    onChange={obj => pickName(obj.target.value)} value={fullName}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <label>Mobile :</label>
            </div>
            <div className="col-lg-6">
                <input type="number"
                    onChange={obj => pickMobile(obj.target.value)} value={mobile}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <label>Email :</label>
            </div>
            <div className="col-lg-6">
                <input type="email"
                    onChange={obj => pickEmailId(obj.target.value)} value={emailId}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <button className="btn btn-primary rounded-pill" onClick={save}>Save</button>
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