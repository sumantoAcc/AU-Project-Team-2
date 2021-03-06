package com.au.discussionforum.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.au.discussionforum.dao.QuestionRepository;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.User;
import com.au.discussionforum.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{
	@Autowired
    QuestionRepository questionRepository;
	
	public List<Question> getQuestionbyUser(int userId){
		return questionRepository.findByUserUserId(userId);
	}

	public List<Question> getAllQuestion(){
		return questionRepository.findAll();
	}


}
