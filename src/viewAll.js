import { useSelector } from "react-redux";
const Myviewall = () => {
    let mybasic = useSelector(state => state.Basiclist);
    let contact = useSelector(state => state.Contactlist);
    let experience = useSelector(state => state.Experiencelist);
    return (
        <div className="container mt-4 text-info">
            <div className="row text-center">
                <div className="col-lg-12 text-center">
                    <h1>About My Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <h2 className="display-6 text-center">Basic</h2>

                    {
                        mybasic.map((info, index) => {
                            return (
                                <div key={index} className="border border-info p-4">
                                    <p>{info.name}</p>
                                    <p>{info.mobile}</p>
                                    <p>{info.email}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
export default Myviewall;