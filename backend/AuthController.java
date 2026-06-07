package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("api/auth")
@CrossOrigin(origins="*")
public class AuthController {
	@Autowired
	private EmployeeRepository employeeRepository;
	@PostMapping("/register")
	public String register(@RequestBody Employee employee)
	{
		if(employeeRepository.findByEmail(employee.getEmail()).isPresent())
		{
			return "Employee already exists";
		}
		
		employeeRepository.save(employee);
		return "Registration Successful";
	}
	
	@PostMapping("/login")
	public String login(@RequestBody Employee employee)
	{
		Employee emp=employeeRepository.findByEmail(employee.getEmail()).orElse(null);
		if(emp==null)
		{
			return "Employee Not Found";
		}
		if(emp.getPassword().equals(employee.getPassword()))
		{
			return "Login Successful";
			
		}
		return "Invalid Password";
	}
}
