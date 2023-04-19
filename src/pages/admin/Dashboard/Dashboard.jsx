import Paragraph from "../../../elements/Paragraph";
import Title from "../../../elements/Title";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row g-3 my-1">
                    <div className="col-md-2">
                        <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div className="content text-center">
                                <Title $h3>12</Title>
                                <Title $h3>Portofolio</Title>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;