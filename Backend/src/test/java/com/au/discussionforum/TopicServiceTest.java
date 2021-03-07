package com.au.discussionforum;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.when;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.au.discussionforum.dao.TopicRepository;
import com.au.discussionforum.model.Topic;
import com.au.discussionforum.service.TopicService;

@SpringBootTest
class TopicServiceTest {

	@Autowired
	private TopicService topicService;
	
	@MockBean
	private TopicRepository topicRepository;
	
	@Test
	
	public void getTopicByIdTest() {
		
		int topic_id=2;
		Topic topic= new Topic(2,"games");
		
		when(topicRepository.findByTopicId(topic_id)).thenReturn(topic);
		assertEquals(2,topicService.getTopicById(topic_id).getTopicId());
		
	}

}