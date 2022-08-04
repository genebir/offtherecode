package com.last.code.service.user;

import com.last.code.model.user.FollowDTO;
import com.last.code.repository.user.FollowMapperRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class FollowService {

    @Autowired
    private FollowMapperRepository followMapperRepository;

    public List<FollowDTO> followingList(int follow_user_fno) {
        return followMapperRepository.followingList(follow_user_fno);
    }

    public List<FollowDTO> followerList(int follow_following_fno) {
        return followMapperRepository.followerList(follow_following_fno);
    }

    public void following(FollowDTO dto) {
        int cnt = followMapperRepository.following(dto);

        if(cnt > 0) {
            log.info("팔로우 성공");
        } else {
            log.info("팔로우 에러 발생");
        }
    }

    public void unfollowing(FollowDTO dto) {
        int cnt = followMapperRepository.unfollowing(dto);

        if(cnt > 0) {
            log.info("언팔로우 성공");
        } else {
            log.info("언팔로우 에러 발생");
        }

    }

    public List<Integer> selectFollowingList(int follow_user_fno) {
        List<FollowDTO> followings = followMapperRepository.followingList(follow_user_fno);
        List<Integer> followingFnos = new ArrayList<Integer>();

        for(FollowDTO dto : followings) {
            followingFnos.add(dto.getFollow_following_fno());
        }

        return followingFnos;
    }
}
