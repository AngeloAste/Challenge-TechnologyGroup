package com.technologygroup.challenge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ChallengeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChallengeApplication.class, args);
        System.out.println("========================================");
        System.out.println("TechnologyGroup Challenge API Started!");
        System.out.println("API running on: http://localhost:8080");
        System.out.println("========================================");
    }
}
