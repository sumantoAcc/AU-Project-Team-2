package com.au.discussionforum.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.au.discussionforum.model.Answer;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.service.AnswerService;
import com.au.discussionforum.service.QuestionService;

@RestController
public class AnswerController {
	
	@Autowired
	private AnswerService answerService;
	
	@Autowired
	private QuestionService questionService;
	
	@GetMapping(path = "/api/answer/{id}")
    public List<Answer> getAnswers(@PathVariable("id") int quesId) {
		
		return answerService.getAnswerByQuesId(quesId);
    }
	
	@PostMapping(path = "/api/answer/markcorrect/{id}")
	public void setCorrectAnswer(@PathVariable("id") int ansId) {
		Answer answer = answerService.getAnswerByAnswerId(ansId);
		answer.setCorrect(true);
		Question question = answer.getQuestion();
		question.setMarked(true);
		questionService.addQuestion(question);
		answerService.setCorrectAnswer(answer);
	}
	
}
