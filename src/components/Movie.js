import React from "react";

const Movie = ({ name, children }) => {
	return (
		<>
			<li>
				<a href={children} target="_blank">
					{name}
				</a>
			</li>
		</>
	);
};

export default Movie;
