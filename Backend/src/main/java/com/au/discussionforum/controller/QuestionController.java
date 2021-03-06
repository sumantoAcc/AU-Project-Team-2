package com.au.discussionforum.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.QuesKeywords;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.User;
import com.au.discussionforum.service.QuesKeywordsService;
import com.au.discussionforum.service.QuestionService;


@RestController
public class QuestionController {
	@Autowired
	QuesKeywordsService quesKeywordsService;
	
	@Autowired
	QuestionService questionService;
	
	@PostMapping(path = "/api/question")
    public List<Question> getQuestions(@RequestBody QuesKeywords quesKeywords) {
			
			List<String> keywords = Arrays.asList(quesKeywords.getKeyword().split(";"));
			List<Question> questionList = new ArrayList<>(); 
			for(String keyword : keywords) {
				System.out.println(keyword);
				questionList.addAll(quesKeywordsService.getQuestionByKeyword(keyword));
			}
			for(Question question : questionList) {
        		System.out.println(question);
        	}
        	return questionList;
    }
	
	@GetMapping(path = "/api/userquestions/{uid}")
	public List<Question> findQuestions(@PathVariable("uid") int userId) {
		
    	List<Question> questions = questionService.getQuestionbyUser(userId);
    	return questions;
	}
	
}