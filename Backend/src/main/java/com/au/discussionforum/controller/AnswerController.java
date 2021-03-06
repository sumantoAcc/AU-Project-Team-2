package com.au.discussionforum.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.Answer;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.User;
import com.au.discussionforum.service.AnswerService;
import com.au.discussionforum.service.QuesKeywordsService;
import com.au.discussionforum.service.QuestionService;
import com.au.discussionforum.service.TopicService;
import com.au.discussionforum.service.UserService;

@RestController
public class AnswerController {
	@Autowired
	QuesKeywordsService quesKeywordsService;
	
	@Autowired
	QuestionService questionService;
	
	@Autowired
	UserService userService;
	
	
	
	@Autowired
	AnswerService answerService;
	
	@GetMapping(path = "/api/answer/{id}")
    public List<Answer> getAnswers(@PathVariable("id") int quesId) {
		
		return answerService.getAnswerByQuesId(quesId);
    }
	
	@PostMapping(path = "/api/addanswers")
	public Boolean addAnswers(@RequestBody Answer ans) {
		Answer answer = new Answer();
		
		User user = userService.getUserByUserId(ans.getUser().getUserId());
		answer.setUser(user);
		answer.setQuestion(ans.getQuestion());
		answer.setCorrect(false);
		answer.setAnswerBody(ans.getAnswerBody());
		return answerService.addAnswer(answer);
    }
}


















