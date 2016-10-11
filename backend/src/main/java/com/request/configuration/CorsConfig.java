package com.request.configuration;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class CorsConfig {
	
	@Component
	@Order(Ordered.HIGHEST_PRECEDENCE)
	public class CorsFilter implements Filter {
		
		public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) {
			HttpServletResponse response = (HttpServletResponse) res;
			HttpServletRequest request = (HttpServletRequest)req;
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
			response.setHeader("Access-Control-Allow-Headers", "origin, x-requested-with, accept, Authorization, Content-Type");
			response.setHeader("Access-Control-Max-Age", "3600");
			if (!request.getMethod().equals("OPTIONS")) {
				try {
					chain.doFilter(req, res);
				} catch (IOException e) {
					System.out.println("IO Exception in CorsFilter: "+e);
					e.printStackTrace();
				} catch (ServletException e) {
					System.out.println("Servlet Exception is CorFilter "+e);
					e.printStackTrace();
				}
			}
		}
		
		public void init(FilterConfig filterConfig) {}
		
		public void destroy() {}
		
	}

}
