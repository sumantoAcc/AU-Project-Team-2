package com.au.discussionforum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.dao.UserRepository;
import com.au.discussionforum.model.Answer;
import com.au.discussionforum.service.AnswerService;

@RestController
public class AnswerController {
	
	@Autowired
	private AnswerService answerService;
	
	@GetMapping(path = "/api/answer/{id}")
    public List<Answer> getAnswers(@PathVariable("id") int quesId) {
		
		return answerService.getAnswerByQuesId(quesId);
    }
	
}
