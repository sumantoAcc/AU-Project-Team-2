package com.au.discussionforum.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.au.discussionforum.model.Question;
import com.au.discussionforum.model.User;

public interface QuestionService {
	public List<Question> getQuestionbyUser(int userId);
}