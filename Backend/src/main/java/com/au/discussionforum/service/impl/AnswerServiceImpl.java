package com.au.discussionforum.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.au.discussionforum.dao.AnswerRepository;
import com.au.discussionforum.model.Answer;
import com.au.discussionforum.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService{
	@Autowired
	AnswerRepository answerRepository;
	
	public List<Answer> getAnswerByQuesId(int quesId){
		return answerRepository.findByQuestionQuesId(quesId);
	}
}
