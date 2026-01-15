import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        sal: 0
    });

    useEffect(() => {
        EmployeeService.getById(id)
            .then(res => setEmployee(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();

        EmployeeService.updateEmployee(id, employee)
            .then(() => {
                alert("Employee Updated Successfully");
                navigate("/viewEmployee");
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-4">
            <h3>Update Employee</h3>

            <form onSubmit={updateEmployee}>
                <input
                    className="form-control mb-2"
                    value={employee.name}
                    onChange={(e) =>
                        setEmployee({ ...employee, name: e.target.value })
                    }
                />

                <input
                    className="form-control mb-2"
                    value={employee.sal}
                    onChange={(e) =>
                        setEmployee({ ...employee, sal:Number( e.target.value) })
                    }
                />

                <button className="btn btn-success">Update</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
