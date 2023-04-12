package com.springboot.domain;

public class Movie {
	private Long id;
	private String name;
	private String genre;
	private String cast;
	private Integer rating;
	
	public Movie() {
		
	}

	public Movie(Long id, String name, String genre, String cast, Integer rating) {
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.cast = cast;
		this.rating = rating;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getCast() {
		return cast;
	}
	public void setCast(String cast) {
		this.cast = cast;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
}