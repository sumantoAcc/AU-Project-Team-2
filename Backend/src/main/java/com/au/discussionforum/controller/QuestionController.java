package com.au.discussionforum.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.QuesKeywords;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.service.QuesKeywordsService;

@RestController
public class QuestionController {
	@Autowired
	QuesKeywordsService quesKeywordsService;
	
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
}
