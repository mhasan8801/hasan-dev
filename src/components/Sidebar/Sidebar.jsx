const Sidebar = () => {
    return(
        <div className="sidebar p-2">
            <div className="logo">
                <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
                <span className="brand-name fs-4">HasanDev</span>
            </div>
            <div className="content">
                <hr text-dark/>
                <div className="list-group list-group-flush">
                    <a className="list-grup-item list-group-item-action pt-1">
                        <i className="speedometer2"></i>
                        <span>Dashboard</span>
                        <hr text-dark/>
                    </a>
                    <a className="list-grup-item list-group-item-action pt-1">
                        <i className="speedometer2"></i>
                        <span>Portofolio</span>
                        <hr text-dark/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;