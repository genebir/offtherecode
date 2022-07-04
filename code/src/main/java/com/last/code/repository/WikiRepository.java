package com.last.code.repository;

import com.last.code.model.WikiEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WikiRepository extends JpaRepository<WikiEntity, Integer> {
}
