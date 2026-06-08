package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Leaves;
import com.example.demo.repository.LeaveRepository;
@RestController
@RequestMapping("/api/leave")
@CrossOrigin(origins = "*")
public class LeaveController {
	@Autowired
	private LeaveRepository leaveRepository;
	@PostMapping("/apply")
	public String applyLeave(@RequestBody Leaves leave)
	{
		leave.setStatus("Pending");
		leaveRepository.save(leave);
		return "Leave Applied Successfully";
	}
}
