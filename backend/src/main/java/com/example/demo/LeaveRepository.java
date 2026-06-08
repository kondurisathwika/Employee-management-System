package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Leaves;

public interface LeaveRepository extends JpaRepository<Leaves, Long>{
	
}
  