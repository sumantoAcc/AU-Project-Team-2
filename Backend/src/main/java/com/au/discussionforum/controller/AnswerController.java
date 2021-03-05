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

import com.au.discussionforum.dao.UserRepository;
import com.au.discussionforum.model.QuesKeywords;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.Answer;
import com.au.discussionforum.service.AnswerService;
import com.au.discussionforum.service.QuestionService;
import com.au.discussionforum.service.UserService;

@RestController
public class AnswerController {
	@Autowired
	private AnswerService answerService;
	
	@GetMapping("/testing")
	public String Hello() {
		return "hello";
	}
	@GetMapping(path = "/api/answer/{id}")
    public List<Answer> getAnswers(@PathVariable("id") int quesId) {
		
		List<Answer> ques =answerService.getAnswerByQuesId(quesId);
		return ques;
    }
}