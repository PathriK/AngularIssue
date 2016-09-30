package com.request.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/").permitAll().anyRequest().authenticated().and().formLogin().loginPage("/").permitAll().and()
			.logout().permitAll();
		
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring()
		   .antMatchers("/frontend/build/**/*.{js}")
		   .antMatchers("/frontend/build/**/*.{map}")
		   .antMatchers("/frontend/build/*.{js}")
		   .antMatchers("/frontend/build/*.{js}")
		   .antMatchers("/frontend/node_modules/**") //may cause issues, may need to go deeper!
		   .antMatchers("/frontend/build/**/*.{html}");
	}
}
