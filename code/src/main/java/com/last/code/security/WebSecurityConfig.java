package com.last.code.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@Slf4j
public class WebSecurityConfig {
// WebSecurityConfigurerAdapter 가 Deprecated 되면서 Bean을 생성해 사용한다.
    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors()
                .and()
                .csrf().disable()
                .httpBasic().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests().antMatchers("/", "/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterAfter(
                        jwtAuthenticationFilter,
                        CorsFilter.class
                );
        return http.build();
    }
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("C:\\code_photo\\feed_photo\\**", "C:\\code_photo\\user_photo\\**");
    }




}
