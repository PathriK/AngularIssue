package com.request.controller;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.request.domain.User;
import com.request.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * Created by KEYSTONE_USER on 9/20/16.
 */
@RestController("/user")
public class LoginController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody Map<String, String> json) throws ServletException {
		
		if(json.get("username")==null || json.get("password")== null){
			throw new ServletException("Please fill in username and password");
		}
		
		String userName = json.get("username");
		String password = json.get("password");
		
		User user = userService.findByUserName(userName);
		
		if(user == null){
			throw new ServletException("Username not found");
		}
		
		String realPassword = user.getPassword();
		
		if(!password.equals(realPassword)){
			throw new ServletException("Invalid login, Please check your username and password.");
		}
		
		return Jwts.builder().setSubject(userName).claim("roles", "user").setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
	}
	
	
	
}
