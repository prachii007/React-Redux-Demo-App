import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Myexperience = () => {

    let [totalComp, pickComp] = useState("");
    let [totalProj, pickProj] = useState("");
    let [totalExp, pickExp] = useState("");
    let [totalSkills, pickSkills] = useState("");

    let dispatch = useDispatch();
    const save = () => {
        let experienceinfo = {
            comp: totalComp,
            proj: totalProj,
            exp: totalExp,
            skill: totalSkills
        };
        let finalinfo = {
            type: "addexperience",
            info: experienceinfo
        };
        dispatch(finalinfo);
        pickProj("");
        pickComp("");
        pickSkills("");
        pickExp("");

    }
    let experience = useSelector(state => state.Experiencelist);
    const delExp = (index) => {
        let einfo = { type: "deleteExp", eindex: index };
        dispatch(einfo);
    }
    return (
        <div className="container mt-5 text-info">
            <div className="row justify-content-center ">
                <div className="col-lg-9  text-center">
                    <h1 className="mb-2">Experience Details</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <label>Total No of Companies Worked At</label>
                </div>
                <div className="col-lg-5">

                    <input type="text"
                        className="form-control border border-primary mb-3"
                        onChange={obj => pickComp(obj.target.value)} value={totalComp} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <label>Total Projects Worked</label>
                </div>
                <div className="col-lg-5">
                    <input type="number"
                        className="form-control border border-primary mb-3"

                        onChange={obj => pickProj(obj.target.value)} value={totalProj} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <label>Total Years of Experience</label>
                </div>
                <div className="col-lg-5">
                    <input type="number"
                        className="form-control border border-primary mb-3"

                        onChange={obj => pickExp(obj.target.value)} value={totalExp} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <label>All Tech Skills You Have</label>
                </div>
                <div className="col-lg-5">
                    <textarea type="number"
                        className="form-control border border-primary mb-3"
                        onChange={obj => pickSkills(obj.target.value)} value={totalSkills}
                        rows="6"></textarea>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3"></div>
                <div className="col-lg-5 text-center">
                    <button className="btn btn-primary px-5" onClick={save}>Save</button>
                </div>
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-lg-8">
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr className="text-center">
                                <th>Total Companies Worked At</th>
                                <th>Total Projects</th>
                                <th>YOE</th>
                                <th>Tech Skills</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                experience.map((einfo, index) => {
                                    return (
                                        <tr key={index} className="text-center">
                                            <td>{einfo.comp}</td>
                                            <td>{einfo.proj}</td>
                                            <td>{einfo.exp}</td>
                                            <td className="text-start">{einfo.skill}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={delExp.bind(this, index)}>
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
export default Myexperience;