package com.au.discussionforum;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.au.discussionforum.dao.QuesKeywordsRepository;
import com.au.discussionforum.model.QuesKeywords;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.Topic;
import com.au.discussionforum.model.User;
import com.au.discussionforum.service.QuesKeywordsService;

@SpringBootTest
class QuesKeywordsServiceTest {

	@Autowired
	private QuesKeywordsService quesKeywordsService;
	
	@MockBean
	private QuesKeywordsRepository quesKeywordsRepository;
	
	@Test
	void addQuesKeywordsTest() {
		
		User user= new User(2,"abc@gmail.com","1234","Rupali","img.jpg");
		Topic topic= new Topic(3,"games");
		Question ques= new Question(1,user,topic,"national game","Which is our national game?",false);
		
		QuesKeywords quesKeyword= new QuesKeywords(1,ques,"national");
		
		quesKeywordsService.addQuesKeywords(quesKeyword);
		verify(quesKeywordsRepository,times(1)).save(quesKeyword);
	
	}
	
}