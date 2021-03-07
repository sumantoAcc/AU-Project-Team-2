package com.au.discussionforum.service;

import java.util.List;
import com.au.discussionforum.model.User;

public interface UserService {
	
	public User getUserbyUsername(String username);
	public List<User> getAllUsers();
	User getUserByUserId(int id);
}
