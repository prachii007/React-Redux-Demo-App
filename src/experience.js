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
    let experience = useState(state => state.Experiencelist);
    const delAdd = (index) => {
        let einfo = { type: "deleteExp", einfo: index };
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
                <div className="col-lg-5 text-center">
                    <label>Total No of Company Worked</label>
                </div>
                <div className="col-lg-5">

                    <input type="text"
                        className="form-control border border-primary mb-3"
                        onChange={obj => pickComp(obj.target.value)} value={totalComp}
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 text-center">
                    <label>Total Projects Worked</label>
                </div>
                <div className="col-lg-5">
                    <input type="number"
                        className="form-control border border-primary mb-3"

                        onChange={obj => pickProj(obj.target.value)} value={totalProj}
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 text-center">
                    <label>Total Years of Experience</label>
                </div>
                <div className="col-lg-5">
                    <input type="number"
                        className="form-control border border-primary mb-3"

                        onChange={obj => pickExp(obj.target.value)} value={totalExp}
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 text-center">
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
                <div className="col-lg-5 text-center">
                    <button className="btn btn-primary px-5">Save</button>
                </div>
            </div>
        </div>

    )

}
export default Myexperience;