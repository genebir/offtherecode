package com.last.code.service;

import com.last.code.dto.UserDTO;
import com.last.code.model.UserEntity;
import com.last.code.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public UserDTO findUser(String email) {
        UserEntity ntt = repository.fineIdByEmail(email);
        UserDTO dto = new UserDTO(ntt);
        return dto;
    }

    public void addUser(UserDTO dto) {
        repository.save(UserDTO.toEntity(dto));
    }

    public void deleteUser(UserDTO dto) {
        repository.delete(UserDTO.toEntity(dto));
    }


}
