package com.au.discussionforum.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.au.discussionforum.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
	User findByUsername(String username);

	User findByUserId(int id); 
}
