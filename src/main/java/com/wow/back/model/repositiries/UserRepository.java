package com.wow.back.model.repositiries;

import com.wow.back.model.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Integer> {
    @Override
    User findOne(Integer integer);
    User findUserByEmailAndPassword(String email,String password);
}
