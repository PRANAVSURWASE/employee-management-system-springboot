package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service("empService")
public class EmployeeService {
	
	@Autowired
	EmployeeRepository empRepo;
	
	public boolean isSave(Employee employee)
	{
		return empRepo.isSave(employee);
	}
	
	public List<Employee> getAllEmployees()
	{
		return empRepo.getAllEmployees();
	}
	
	public Employee getEmployeeeById(int empid)
	{
		return empRepo.getEmployeeById(empid);
	}
	
	public Employee updateById(int empid,Employee emp)
	{
		Employee empResult = empRepo.updateEmployee(empid,emp);
		if(empResult!=null)
		{
			return empResult;
		}
		
		
		return null;
	}
	public boolean isDelete(int empid)
	{
		boolean result = empRepo.isDelete(empid);
		return result;
	}
	
	public Page<Employee> findAll(int page ,int size)
	{
		Pageable pageable = PageRequest.of(page, size);
		return empRepo.findAll(pageable);
		
	}
	
	

}
