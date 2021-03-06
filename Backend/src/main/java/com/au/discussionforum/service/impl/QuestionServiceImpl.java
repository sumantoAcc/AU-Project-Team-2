package com.au.discussionforum.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.au.discussionforum.dao.QuestionRepository;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
    QuestionRepository questionRepository;
	
	public static Map<Question, Integer> sortByValue(Map<Question, Integer> wordCounts) {

        return wordCounts.entrySet()
                .stream()
                .sorted((Map.Entry.<Question, Integer>comparingByValue().reversed()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));
    }

	public List<Question> getSortedQuestionList(List<Question> questionList){		
		Map<Question,Integer> questionCount = new HashMap<Question, Integer>();
		for(Question q : questionList) {
            if(questionCount.containsKey(q)) {
                Integer  count = questionCount.get(q);
                questionCount.put(q, ++count);
            } else {
                questionCount.put(q,1);
            }
        }
		
		for(Question x: questionList)
			System.out.println(questionCount.get(x) + " " + x.getQuesId());
		
		Map<Question,Integer> sortedQuestionMap = sortByValue(questionCount);
		System.out.println(sortedQuestionMap);
		return null;
		
	}

	public List<Question> getQuestionByUser(int userId) {
		return questionRepository.findByUserUserId(userId);
	}
	
}
