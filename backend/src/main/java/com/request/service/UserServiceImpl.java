package com.request.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.request.repository.UserLoginRepo;
import com.request.domain.User;

/**
 * Created by KEYSTONE_USER on 9/26/16.
 */
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserLoginRepo loginRepo;
	
	@Override
	public User save(User applicant) {
		return null;
	}
	
	@Override
	public User findByUserName(String userName) {
		return null;
	}
}
