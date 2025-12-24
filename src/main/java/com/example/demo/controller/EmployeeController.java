package com.example.demo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	
	Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	@Autowired
	EmployeeService empService ;
	@PostMapping("/save")
	public ResponseEntity<String> saveEmployee(@RequestBody Employee employee)
	{
		logger.debug("save API function Call");
		boolean b = empService.isSave(employee);
		if(b)
		{
			logger.info("Employee Save Successfully...");
			return new ResponseEntity<>("Employee Save Sucessfully",HttpStatus.CREATED);
		}
		else 
		{	
		return new ResponseEntity<>("Employee not Save",HttpStatus.EXPECTATION_FAILED);
		}
		
	}
	
	@GetMapping("/viewAll")
	public ResponseEntity<List<Employee>> getAll() {

	    logger.info("Display All Employees...");

	    List<Employee> list = empService.getAllEmployees();

	    if (list.isEmpty()) {
	        return ResponseEntity.noContent().build(); 
	    }

	    return ResponseEntity.ok(list); 
	}

	
	@GetMapping("/searchbyId/{eid}")
	public ResponseEntity <Employee> searchById(@PathVariable("eid") Integer eid)
	{
		Employee emp = empService.getEmployeeeById(eid);
		return  ResponseEntity.ok(emp);
		
	}
	
	@PutMapping("/updatebyid/{eid}")
	public ResponseEntity<Employee> updateById(
	        @PathVariable("eid") Integer eid,
	        @RequestBody Employee employee) {

	    Employee emp = empService.updateById(eid, employee);

	    if (emp != null) {
	        return ResponseEntity.ok(emp);
	    } else {
	        return ResponseEntity
	                .status(HttpStatus.NOT_FOUND)
	                .body(null);
	    }
	}

	
	@DeleteMapping("/deletebyid/{eid}")
	public ResponseEntity<String> deleteById(@PathVariable("eid") Integer eid) {

	    boolean deleted = empService.isDelete(eid);

	    if (deleted) {
	        return ResponseEntity.ok("Employee deleted successfully");
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                             .body("Employee not found");
	    }
	}

	@GetMapping("/fetchbypage/{pagenum}/{pagesize}")
	public Page<Employee> fetchbyPage(@PathVariable("pagenum") Integer pagenum,@PathVariable("pagesize") Integer pagesize)
	{
		Page<Employee> pages = empService.findAll(pagenum, pagesize);
		return pages;
		
	}
	
	
	

}
