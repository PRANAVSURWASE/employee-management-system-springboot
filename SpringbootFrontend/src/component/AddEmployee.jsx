import React from 'react';
import ReactDom from 'react-dom/client';
import {useState} from 'react';
import EmployeeService from '../services/EmployeeService.js';

let AddEmployee=()=>{

    let[emp,setEmp]=useState({
        name:'',
        sal:0,
        
    });
    let [msg,setMsg]=useState('');

    let saveEmployee=(e)=>{
         e.preventDefault(); 
        let promise=EmployeeService.save(emp);
        promise.then((res)=>{
             
             setEmp({
                name:'',
                sal: 0,
             });
             setMsg(`Employee added successfully`)
        }).catch((err)=>{
            console.log(err);
            alert("Something went wrong");
        });
    }

    return<>
   
    <div className="container p-5">
        <form onSubmit={saveEmployee}>

            <div className="mb-3">
                <label htmlFor="empName" className="form-label">Employee Name</label>
                <input type="text" value={emp.name} className="form-control" onChange={(e)=>setEmp(prev=>{return{...prev,name:e.target.value}})} />
            </div>
            <div className="mb-3">
                <label htmlFor="empEmail" className="form-label">Employee Salary</label>
                <input type="text" value={emp.sal} className="form-control"  onChange={(e)=>setEmp(prev=>{return{...prev,sal:e.target.value}})} />
            </div>
            
            <button className="btn btn-primary" >Add Employee</button>

            <div className="mb-3">
                <label className="form-label text-success fw-bold">{msg}</label>
            </div>

        </form>
        
    </div>

    
    </>
}
export default AddEmployee;