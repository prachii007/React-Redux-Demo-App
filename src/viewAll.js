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
                        mybasic.map((name, index) => {
                            return (
                                <p key={index} >
                                    {name}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Myviewall;