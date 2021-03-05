package com.au.discussionforum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.User;
import com.au.discussionforum.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(path = "/login")
    public User checkUser(@RequestBody User user1) {
			
        	User user = userService.getUserbyUsername(user1.getUsername());
        	if(user==null) {
        		return null;
        	}else {
        		if(user.getPassword().equals(user1.getPassword())) {
        			return user;
        		}
        	}
       
        return null;
    }
}
