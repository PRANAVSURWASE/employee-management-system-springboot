package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Employee;

@Repository("empRepo")
public class EmployeeRepository {

	@Autowired
	JdbcTemplate template;
	
	public boolean isSave(Employee employee)
	{
		int value = template.update("insert into employee values('0',?,? )",new Object[] {employee.getName(),employee.getSal()});
		return value > 0? true:false;
	}
	
	public List<Employee> getAllEmployees()
	{
		List<Employee> list = template.query("select * from employee" ,new RowMapper<Employee>() {

			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee emp = new Employee();
				emp.setId(rs.getInt(1));
				emp.setName(rs.getString(2));
				emp.setSal(rs.getInt(3));
				
				return emp;
			}
			
		});
		return list;
		
	}
	
	public Employee getEmployeeById(int empid)
	{
		List<Employee> list = template.query("select * from employee where eid=?",new Object[] {empid},new RowMapper<Employee>() {

			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee emp = new Employee();
				emp.setId(rs.getInt(1));
				emp.setName(rs.getString(2));
				emp.setSal(rs.getInt(3));
				return emp;
			}
			
		});
		return list.get(0);
		
		
	}
	
	public Employee updateEmployee(int empid,Employee emp)
	{
		int value = template.update("update employee set name=?,sal=? where eid=?", new Object[] {emp.getName(),emp.getSal(),empid});
		return value>0?emp:null;
	}

	public boolean isDelete(int empid) {
		
		int value = template.update("delete from employee where eid=?",empid);
		return value>0?true:false;
	}
	
	public Page<Employee> findAll(Pageable pageable )
	{
		int total = template.queryForObject("select count(*) from employee", Integer.class);
		List<Employee> list = template.query("select * from employee order by eid limit ? offset ?", new RowMapper<Employee>() {

			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee emp = new Employee();
				emp.setId(rs.getInt(1));
				emp.setName(rs.getString(2));
				emp.setSal(rs.getInt(3));
				return emp;
			}
			
		},pageable.getPageSize(),pageable.getOffset()) ;
		
		return new PageImpl<>(list,pageable,total);
		
	}
}
