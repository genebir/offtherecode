package com.last.code.repository;

import com.last.code.model.FeedEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<FeedEntity, Integer> {
}
