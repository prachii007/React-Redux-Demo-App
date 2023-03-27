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
                                    <p><span className="text-black">Name:</span> {info.name}</p>
                                    <p><span className="text-black">Mobile:</span>  {info.mobile}</p>
                                    <p><span className="text-black">Email:</span>  {info.email}</p>
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
                                    <p><span className="text-black">Local Address:</span>  {info.local}</p>
                                    <p><span className="text-black">Permanent Address:</span> {info.perm}</p>
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
                                    <p> <span className="text-black">Total Companies Worked at: </span>{info.comp}</p>
                                    <p><span className="text-black">Total Projects:</span> {info.proj}</p>
                                    <p><span className="text-black">Total Years of Experience:</span> {info.exp}</p>
                                    <p><span className="text-black">Total Tech Skills: </span>{info.skill}</p>

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