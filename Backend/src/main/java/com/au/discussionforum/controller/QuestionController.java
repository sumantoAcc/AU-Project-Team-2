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
import com.au.discussionforum.model.Topic;
import com.au.discussionforum.model.User;
import com.au.discussionforum.model.UserTopic;
import com.au.discussionforum.service.UserTopicService;
import com.au.discussionforum.service.QuesKeywordsService;
import com.au.discussionforum.service.QuestionService;
import com.au.discussionforum.service.TopicService;
import com.au.discussionforum.service.UserService;

@RestController
public class QuestionController {
	@Autowired
	QuesKeywordsService quesKeywordsService;
	
	@Autowired
	QuestionService questionService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	TopicService topicService;
	
	@Autowired
	UserTopicService userTopicService;
	
	@PostMapping(path = "/api/question/keywords")
    public List<Question> getQuestionsByKeyword(@RequestBody QuesKeywords quesKeywords) {
			
		List<String> keywords = Arrays.asList(quesKeywords.getKeyword().split(";"));
		List<Question> questionList = quesKeywordsService.getQuestionByKeyword(keywords);
		questionList = questionService.getSortedQuestionList(questionList);
		
    	return questionList;
    }
	
	@GetMapping(path = "/api/userquestions/{uid}")
	public List<Question> getQuestionsByUser(@PathVariable("uid") int userId) {
		
		return questionService.getQuestionByUser(userId);
	}
	
	@PostMapping(path = "/api/addquestion/{keyword}")
	public void addQuestion(@RequestBody Question q,@PathVariable String keyword) {
		Question question = new Question();
		User user = userService.getUserByUserId(q.getUser().getUserId());
		Topic topic = topicService.getTopicById(q.getTopic().getTopicId());
		
		question.setTitle(q.getTitle());
		question.setBody(q.getBody());
		question.setMarked(false);
		question.setUser(user);
		question.setTopic(topic);
		
		question = questionService.addQuestion(question);
		System.out.println(keyword);
		List<String> keywords = Arrays.asList(keyword.split(","));
		
		for(String key : keywords) {
			System.out.println(key);
			QuesKeywords quesKeywords = new QuesKeywords();
			quesKeywords.setQuestion(question);
			quesKeywords.setKeyword(key);
			quesKeywordsService.addQuesKeywords(quesKeywords);
		}
		
	}
	@GetMapping(path = "/api/questions/{uid}")
	public List<Question> getQuestionsByTopic(@PathVariable("uid") int userId) {
		List <UserTopic> topics=userTopicService.getTopicByUser(userId);
		List <Question> res=new ArrayList<>();
		for(UserTopic topic: topics) {
			res.addAll(questionService.getQuestionByTopic(topic.getTopic().getTopicId()));
		}
		
		return res;
	}
}
