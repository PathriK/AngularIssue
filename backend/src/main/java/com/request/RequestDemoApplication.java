package com.request;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RequestDemoApplication {

  private static final Logger log = LoggerFactory.getLogger(RequestDemoApplication.class);

	public static void main(String[] args) {

    SpringApplication.run(RequestDemoApplication.class, args);
	}
}
