import { useSelector } from "react-redux";
const Myviewall = () => {
    let mybasic = useSelector(state => state.Basiclist);
    return (
        <div className="container mt-4 text-info">
            <div className="row text-center">
                <div className="col-lg-12 text-center">
                    <h1>About My Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <h3>Basic</h3>
                    {
                        mybasic.map((info, index) => {
                            return (
                                <div key={index} >
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