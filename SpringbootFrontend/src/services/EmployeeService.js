import axios from 'axios';

class EmployeeService {

    save(emp)
    {
        return axios.post("http://localhost:8081/employee/save",emp);
    }

    getAll() {
        return axios.get("http://localhost:8081/employee/viewAll");
    }

     deleteById(id) {
        return axios.delete(`http://localhost:8081/employee/deletebyid/${id}`);

    }
    getById(id) {
        return axios.get(`http://localhost:8081/employee/searchbyId/${id}`);
    }

    updateEmployee(id, emp) {   
        return axios.put(`http://localhost:8081/employee/updatebyid/${id}`, emp);
    }

}
export default new EmployeeService();   