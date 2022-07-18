package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

}
