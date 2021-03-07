package com.au.discussionforum;

import static org.junit.jupiter.api.Assertions.*;



import org.junit.jupiter.api.Test;


import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

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
	public void addQuesKeywordsTest() {
		
		User user= new User(2,"abc@gmail.com","1234","Rupali","img.jpg");
		Topic topic= new Topic(3,"games");
		Question ques= new Question(1,user,topic,"national game","Which is our national game?",false);
		
		QuesKeywords quesKeyword= new QuesKeywords(1,ques,"national");
		
		quesKeywordsService.addQuesKeywords(quesKeyword);
		verify(quesKeywordsRepository,times(1)).save(quesKeyword);
	
	}
	
	@Test
	public void getQuestionByKeywordTest() {
		
		List<String> keywords= new ArrayList<String>();
		keywords.add("national");
		keywords.add("color");
		keywords.add("bird");
	
	
	User user1= new User(2,"abc@gmail.com","1234","Rupali","img.jpg");
	Topic topic1= new Topic(3,"country");
	Question ques1= new Question(1,user1,topic1,"national bird","Which is our national bird?",false);
	
	QuesKeywords quesKeyword1= new QuesKeywords(1,ques1,"national");
	
	User user2= new User(3,"abc@gmail.com","1234","Sakshi","img.jpg");
	Topic topic2= new Topic(4,"art");
	Question ques2= new Question(2,user2,topic2,"color","Which is the color of peace?",false);
	
	QuesKeywords quesKeyword2= new QuesKeywords(2,ques2,"color");
	
	
	User user3= new User(4,"abc@gmail.com","1234","Rupali","img.jpg");
	Topic topic3= new Topic(3,"birds");
	Question ques3= new Question(1,user3,topic3,"fly","Which is the fastest bird?",false);
	
	QuesKeywords quesKeyword3= new QuesKeywords(3,ques3,"bird");
	
	List<QuesKeywords> quesKeywords= new ArrayList<QuesKeywords>();
	quesKeywords.add(quesKeyword1);
	quesKeywords.add(quesKeyword2);
	quesKeywords.add(quesKeyword3);
	
	List<Question> ques= new ArrayList<Question>();
	ques.add(ques1);
	ques.add(ques2);
	ques.add(ques3);
	
	assertEquals(ques,quesKeywordsService.getQuestionByKeyword(keywords));
	
	}	
	
}
