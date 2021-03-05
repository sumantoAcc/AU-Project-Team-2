package com.au.discussionforum.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.au.discussionforum.model.User;

@Service
public interface UserService {
	
	public User getUserbyUsername(String username);
	public List<User> getAllUsers();
	
}
