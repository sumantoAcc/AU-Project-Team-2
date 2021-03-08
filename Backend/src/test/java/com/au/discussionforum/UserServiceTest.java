package com.au.discussionforum;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.when;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.au.discussionforum.dao.UserRepository;
import com.au.discussionforum.model.User;
import com.au.discussionforum.service.UserService;

@SpringBootTest
class UserServiceTest {

	@Autowired
	private UserService userService;
	
	@MockBean
	private UserRepository userRepository;
	
	
	@Test
	public void getUserbyUsernameTest() {
		
		String username="Rupali";
		User user= new User(1,"abc@gmail.com","1234","Rupali","img.jpg");
		
		when(userRepository.findByUsername(username))
		.thenReturn(user);
         assertEquals("Rupali", userService.getUserbyUsername(username).getUsername());
	}
	
	@Test
	public void getAllUsersTest() {
		
		User user1= new User(1,"abc@gmail.com","1234","Aman","img.jpg");
		User user2= new User(2,"pqr@gmail.com","098","Rupali","pic.jpg");
		
		when(userRepository.findAll()).thenReturn(Stream.of(user1,user2).collect(Collectors.toList()));
		assertEquals(2,userService.getAllUsers().size());
	}
	
	@Test
	public void getUserByUserIdTest() {
		
		int user_id=2;
		User user= new User(2,"abc@gmail.com","1234","Aman","img.jpg");
		
		when(userRepository.findByUserId(user_id))
		.thenReturn(user);
         assertEquals(2, userService.getUserByUserId(user_id).getUserId());
	}
	
}