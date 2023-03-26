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
                                <div key={index} className="border rounded border-info p-4 mb-4">
                                    <p>Name: {info.name}</p>
                                    <p>Mobile:{info.mobile}</p>
                                    <p>Email: {info.email}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-lg-3">
                    <h2 className="display-6 text-center">Contact</h2>

                    {
                        contact.map((info, index) => {
                            return (
                                <div key={index} className="border rounded border-info p-4 mb-4">
                                    <p>Local Address: {info.local}</p>
                                    <p>Permanent Address: {info.perm}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-lg-3">
                    <h2 className="display-6 text-center">Experience</h2>

                    {
                        experience.map((info, index) => {
                            return (
                                <div key={index} className="border rounded border-info p-4 mb-4">
                                    <p>Total Companies Worked at: {info.comp}</p>
                                    <p>Total Projects: {info.proj}</p>
                                    <p>Total Years of Experience: {info.exp}</p>
                                    <p>Total Tech Skills: {info.skill}</p>

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