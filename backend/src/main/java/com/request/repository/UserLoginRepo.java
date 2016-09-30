package com.request.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.request.domain.User;

/**
 * Created by KEYSTONE_USER on 9/26/16.
 */
public interface UserLoginRepo extends JpaRepository<User, Long> {
	
	
	
}
