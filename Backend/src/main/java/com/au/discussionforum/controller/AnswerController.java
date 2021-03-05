package com.au.discussionforum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.dao.UserRepository;

@RestController
public class AnswerController {
	@GetMapping("/testing")
	public String Hello() {
		return "hello";
	}
}
