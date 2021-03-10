package com.au.discussionforum.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.QuesKeywords;
import com.au.discussionforum.model.User;
import com.au.discussionforum.model.UserTopic;
import com.au.discussionforum.model.dto.UserDTO;
import com.au.discussionforum.model.dto.UserSignupDTO;
import com.au.discussionforum.service.TopicService;
import com.au.discussionforum.service.UserService;
import com.au.discussionforum.service.UserTopicService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserTopicService userTopicService;
	
	@Autowired
	private TopicService topicService;
	
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
	
	@PostMapping(path = "/api/signup")
	public void addUser(@RequestBody UserSignupDTO userSignupDTO) {
		User user = new User();
		user.setEmail(userSignupDTO.getEmail());
		user.setPassword(userSignupDTO.getPassword());
		user.setPhoto(userSignupDTO.getPhoto());
		user.setUsername(userSignupDTO.getUsername());
		
		user = userService.addUser(user);
		
		List<String> topics = Arrays.asList(userSignupDTO.getTopic().split(","));
		
		for(String topic : topics) {
			UserTopic userTopic = new UserTopic();
			userTopic.setUser(user);
			userTopic.setTopic(topicService.getTopicByName(topic));
			userTopicService.addUserTopic(userTopic);
		}

	}
}
