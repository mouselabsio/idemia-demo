package io.mouselabs.idemiademo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
/* app-wide configuration to govern cross-origin allowances */
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/idemia/v1/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST")
                        .maxAge(3600);
            }
        };
    }
}