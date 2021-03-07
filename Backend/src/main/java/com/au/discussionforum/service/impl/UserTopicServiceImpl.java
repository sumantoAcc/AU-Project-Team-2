package com.au.discussionforum.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.au.discussionforum.dao.UserTopicRepository;
import com.au.discussionforum.model.UserTopic;
import com.au.discussionforum.service.UserTopicService;

@Service
public class UserTopicServiceImpl implements UserTopicService{
	@Autowired
	UserTopicRepository userTopicRepository;
	
	public List <UserTopic> getTopicByUser(int userId){
		return userTopicRepository.findByUserUserId(userId);
	}
}
