package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	@PutMapping("/update/{id}")
	public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee employee)
	{
		Employee emp=employeeRepository.findById(id).orElseThrow();
		emp.setName(employee.getName());
		emp.setPhone(employee.getPhone());
		emp.setDepartment(employee.getDepartment());
		emp.setSalary(employee.getSalary());
		emp.setRole(employee.getRole());
		return employeeRepository.save(emp);
	}
}
