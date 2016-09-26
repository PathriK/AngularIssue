package com.request.dto;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by KEYSTONE_USER on 9/21/16.
 */
public class LoginDTO {
	
	@NotEmpty
	private String login;
	
	@NotEmpty
	private String password;
	
	public String getLogin() {
		return login;
	}
	
	public void setLogin(String login) {
		this.login = login;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
}
