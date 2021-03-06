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

import org.hibernate.mapping.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.au.discussionforum.dao.QuestionRepository;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.service.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
    QuestionRepository questionRepository;
	
//	 public static <Question, Integer extends Comparable<Integer> > Map<Question, Integer> valueSort(final Map<Question, Integer> map){ 
//        // Static Method with return type Map and 
//        // extending comparator class which compares values 
//        // associated with two keys 
//        Comparator<Question> valueComparator = new Comparator<Question>() { 
//            
//                  // return comparison results of values of 
//                  // two keys 
//                  public int compare(Question k1, Question k2) 
//                  { 
//                      int comp = map.get(k1).compareTo( 
//                          map.get(k2)); 
//                      if (comp == 0) 
//                          return 1; 
//                      else
//                          return comp; 
//                  } 
//            
//              }; 
//        
//        // SortedMap created using the comparator 
//        Map<Question, Integer> sorted = new TreeMap<Question, Integer>(valueComparator); 
//        
//        sorted.putAll(map); 
//        
//        return sorted; 
//    } 
	 
	 
	public List<Question> getSortedQuestionList(List<Question> questionList){		
		List<Question> sortedQuestionList = new ArrayList<Question>();
		Map<Question,Integer> questionCount = new HashMap<Question, Integer>();
		for(Question q : questionList) {
            if(questionCount.containsKey(q)) {
                Integer  count = questionCount.get(q);
                questionCount.put(q, ++count);
            } else {
                questionCount.put(q,1);
            }
        }
		
		Map<Question,Integer> sortedQuestionMap = questionCount.entrySet().stream()
                								  .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                								  .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue,
                								   (oldValue, newValue) -> oldValue, LinkedHashMap::new));
		
		for(Question question : sortedQuestionMap.keySet()) {
			sortedQuestionList.add(question);
		}
		return sortedQuestionList;
		
	}

	public List<Question> getQuestionByUser(int userId) {
		return questionRepository.findByUserUserId(userId);
	}
	
}
