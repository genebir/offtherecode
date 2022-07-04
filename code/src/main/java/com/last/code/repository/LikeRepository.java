package com.last.code.repository;

import com.last.code.model.LikeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<LikeEntity, Integer> {
}
