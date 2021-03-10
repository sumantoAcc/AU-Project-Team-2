    package com.au.discussionforum;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import com.au.discussionforum.controller.CommentController;
import com.au.discussionforum.controller.QuestionController;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.Topic;
import com.au.discussionforum.model.User;
import com.au.discussionforum.service.QuesKeywordsService;
import com.au.discussionforum.service.QuestionService;
import com.au.discussionforum.service.TopicService;
import com.au.discussionforum.service.UserService;
import com.au.discussionforum.service.UserTopicService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(QuestionController.class)
class QuestionControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	@MockBean
	private QuestionService questionService;
	
	@MockBean
	QuesKeywordsService quesKeywordsService;
	
	@MockBean
	private UserService userService;
	
	@MockBean
	private UserTopicService userTopicService;

	@MockBean
	private TopicService topicService;
	
	
//	@MockBean
//	private UserService userService;
//	
//	@MockBean
//	private UserTopicService userTopicService;
	
	
	@Test
	void getQuestionsByUserTest() throws JsonProcessingException, Exception {
		
        int user_id=1;
		
		User user= new User(1,"abc@gmail.com","1234","Rupali","img.jpg");
	
		Topic topic= new Topic(1,"games");
		
		
		Question ques1= new Question(2,user,topic,"national game","Which is our national game?",false);
		Question ques2= new Question(3,user,topic,"color","Which is the color of peace?",false);
		
		List<Question> ques_list= new ArrayList<>();
		ques_list.add(ques1);
		ques_list.add(ques2);
		
		when(questionService.getQuestionByUser(user_id)).thenReturn(ques_list);
		
		String url = "/api/userquestions/{uid}";
		MvcResult mvcResult = mockMvc.perform(
											get(url,1)
											.contentType("application/json")
											.content(objectMapper.writeValueAsString(ques_list))
										).andExpect(status().isOk()).andReturn();
		
		String actualJsonResponse = mvcResult.getResponse().getContentAsString();
		String expectedJsonResponse = objectMapper.writeValueAsString(ques_list);
		assertEquals(actualJsonResponse,expectedJsonResponse);
	}

	@Test
	void getQuestionsByKeywordTest() throws JsonProcessingException, Exception {
		List<String> keywords= new ArrayList<>();
		keywords.add("national");
		keywords.add("color");
		
		User user1= new User();
		user1.setUserId(1);
		user1.setEmail("abc@gmail.com");
		user1.setPassword("1234");
		user1.setUsername("Rupali");
		user1.setPhoto("img.jpg");
		
		Topic topic1= new Topic();
		topic1.setTopicId(1);
		topic1.setTopicName("birds");
		
		Question ques1= new Question();
		ques1.setQuesId(1);
		ques1.setUser(user1);
		ques1.setTopic(topic1);
		ques1.setTitle("fly");
		ques1.setBody("Which is the fastest bird?");
		ques1.setMarked(false);
		
		User user2= new User(2,"abc@gmail.com","1234","Sakshi","img.jpg");
		Topic topic2= new Topic(2,"art");
		Question ques2= new Question(2,user2,topic2,"color","Which is the color of peace?",false);
		
		List<Question> q_list= new ArrayList<>();
		q_list.add(ques1);
		q_list.add(ques1);
		q_list.add(ques1);
		q_list.add(ques2);
		q_list.add(ques2);
		
		List<Question> qs_list= new ArrayList<>();
		qs_list.add(ques1);
		qs_list.add(ques2);
		
		when(quesKeywordsService.getQuestionByKeyword(keywords)).thenReturn(q_list);
		when(questionService.getSortedQuestionList(q_list)).thenReturn(qs_list);
		
		String url="/api/question/keywords";
		MvcResult mvcResult =
				mockMvc.perform(
										post(url)
										.contentType("application/json")
										.content(objectMapper.writeValueAsString(qs_list))
										).andExpect(status().isOk()).andReturn();
		
		String actualJsonResponse = mvcResult.getResponse().getContentAsString();
		String expectedJsonResponse = objectMapper.writeValueAsString(qs_list);
		System.out.println(actualJsonResponse);
		System.out.println(expectedJsonResponse);
		assertEquals(actualJsonResponse,expectedJsonResponse);
		
	}
	
//	@Test
//	void getQuestionsByTopicTest() {
//		
//		
//	}
}

    
