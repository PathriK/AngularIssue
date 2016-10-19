package com.request.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		
		http.authorizeRequests().antMatchers("/user/register")
			.permitAll().anyRequest().anonymous();
		
		http.authorizeRequests().antMatchers("/user/login")
			.permitAll().anyRequest().anonymous();
		
		http.authorizeRequests().antMatchers("/")
			.permitAll().anyRequest().authenticated();
		
		http.formLogin().loginPage("/")
			.permitAll().and().logout().permitAll();
	}
	
}
