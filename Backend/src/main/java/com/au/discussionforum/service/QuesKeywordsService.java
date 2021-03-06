package com.au.discussionforum.service;

import java.util.List;

import com.au.discussionforum.model.Question;

public interface QuesKeywordsService {
	List<Question> getQuestionByKeyword(List<String> keyword);
}
