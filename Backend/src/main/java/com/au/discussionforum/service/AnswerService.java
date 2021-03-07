
package com.au.discussionforum.service;

import java.util.List;

import com.au.discussionforum.model.Answer;

public interface AnswerService {
	List<Answer> getAnswerByQuesId(int quesId);
	Boolean addAnswer(Answer answer);
}

