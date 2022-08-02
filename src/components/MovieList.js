import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
	const MovieNodes = movies.map((movie) => {
		return (
			<Movie name={movie.name} key={movie.id}>
				{movie.url}
			</Movie>
		);
	});

	return <>{MovieNodes}</>;
};

export default MovieList;
