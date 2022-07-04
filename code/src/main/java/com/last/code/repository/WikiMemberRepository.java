package com.last.code.repository;

import com.last.code.model.WikiMemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WikiMemberRepository extends JpaRepository<WikiMemberEntity, Integer> {
}
