package com.request.service;

import com.request.domain.User;

/**
 * Created by KEYSTONE_USER on 9/26/16.
 */
public interface UserService {
	User save(User applicant);
	User findByUserName(String userName);
}
