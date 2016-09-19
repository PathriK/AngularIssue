package com.request.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserAccount {
	
	@Id
	Long id;
	
	private String userName;
	private String password;
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}
