import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="fw-bold">Employee Management System</h1>
                <p className="text-muted">
                    React + Spring Boot CRUD Application
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-3 mb-3">
                    <div className="card shadow text-center">
                        <div className="card-body">
                            <h5 className="card-title">Add Employee</h5>
                            <p className="card-text">
                                Add new employee details
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate("/addEmployee")}
                            >
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div className="card shadow text-center">
                        <div className="card-body">
                            <h5 className="card-title">View Employees</h5>
                            <p className="card-text">
                                View, update and delete employees
                            </p>
                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/viewEmployee")}
                            >
                                View Employees
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4 text-muted">
                © 2025 Employee Management System
            </div>
        </div>
    );
};

export default LandingPage;
