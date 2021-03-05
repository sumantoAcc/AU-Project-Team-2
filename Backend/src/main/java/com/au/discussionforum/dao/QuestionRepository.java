package com.au.discussionforum.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.au.discussionforum.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question,Long>{
	Question findByQuesId(String username);
}
