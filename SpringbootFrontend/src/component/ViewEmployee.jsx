import { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ViewEmployee = () => {
    const [empList, setEmpList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        EmployeeService.getAll()
            .then((res) => setEmpList(res.data))
            .catch((err) => console.error(err));
    };

    const deleteEmployee = (id) => {
        if (window.confirm('Are you sure?')) {
            EmployeeService.deleteById(id)
                .then(() => {
                    alert('Employee deleted');
                    loadEmployees();
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <div className="container p-5">
            <h3>Employee List</h3>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>

                <tbody>
                    {empList.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.sal}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteEmployee(emp.id)}
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() =>
                                        navigate(`/updateEmployee/${emp.id}`)
                                    }
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewEmployee;
