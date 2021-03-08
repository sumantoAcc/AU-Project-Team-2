package com.au.discussionforum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.User;
import com.au.discussionforum.model.DTO.UserDTO;
import com.au.discussionforum.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(path = "/api/login")
    public User checkUser(@RequestBody UserDTO userDTO) {
			
        	User user = userService.getUserbyUsername(userDTO.getUsername());
        	if(user==null) {
        		return null;
        	}else {
        		if(user.getPassword().equals(userDTO.getPassword())) {
        			return user;
        		}
        	}
       
        return null;
    }
}
