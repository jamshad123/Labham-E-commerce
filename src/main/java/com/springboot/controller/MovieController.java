package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.domain.Movie;
import com.springboot.dao.MovieDAO;

import java.util.Map;

//Fill your code here
public class MovieController {

	//Fill your code here
    public Movie create(@RequestBody Movie movie)
    {
	//Fill your code here
    }

	//Fill your code here
    public Map<String, List<Movie>> categorizeMovies()
    {
        //Fill your code here
    }
}
