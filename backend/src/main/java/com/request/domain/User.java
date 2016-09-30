package com.request.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Required;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long userId;
	@Column(name = "firstName")
	@Min(2) @Max(15)
	@NotNull
	private String firstName;
	@Column(name = "lastName")
	private String lastName;
	@Column(name = "userName")
	private String userName;
	@Column(name = "password")
	private String password;
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
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
	
	@Override
	public String toString() {
		return "Applicant{" + "firstName='" + firstName + '\'' + ", lastName='" + lastName + '\'' + ", userName='" + userName + '\'' + ", password='" +
			   password + '\'' + '}';
	}
}
