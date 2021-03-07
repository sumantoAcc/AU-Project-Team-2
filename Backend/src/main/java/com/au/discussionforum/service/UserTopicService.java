package com.au.discussionforum.service;

import java.util.List;

import com.au.discussionforum.model.UserTopic;

public interface UserTopicService {
	List <UserTopic> getTopicByUser(int userId);
}
