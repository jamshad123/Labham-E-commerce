package com.springboot.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.springboot.domain.Movie;

//Fill your code here
public class MovieDAO {
	
	public static List<Movie> movieList = new ArrayList<Movie>();
	static {
		movieList.add(new Movie(1L, "Avengers: Endgame","Sci-fi","Chris Evans", 4));
		movieList.add(new Movie(2L, "Joker","Crime","Joaquin Phoenix", 3));
		movieList.add(new Movie(3L, "Frozen 2","Animation","Idina Menzel", 4));
		movieList.add(new Movie(4L, "Toy Story 4","Animation","Tom Hanks", 5));
		movieList.add(new Movie(5L, "Wonder Woman","Sci-fi","Gal Gadot", 4));
	}

	public Map<String, List<Movie>> categorizeMovies() {
		//Fill your code here
	}
	
	public Movie saveMovie(Movie movie) {
		//Fill your code here
	}
}
